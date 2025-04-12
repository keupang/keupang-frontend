import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { LoginFlex } from './styles/LoginForm.styled';
import { Input } from '@/styles/commonStyles';
import { Button } from '@/components/common/Button';
import useAuthLoginMutation from '@/hooks/quries/useAuthLoginMutation';
import { handleLoginSubmit } from '../../../utils/form/handleLoginSubmit';
import { useNavigation } from '@/hooks/useNavigation';

export interface LoginFormProps {
	userEmail: string;
	userPassword: string;
}

const LoginFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	width: 100%;
`;

const LoginForm: React.FC = () => {
	const { register, handleSubmit } = useForm<LoginFormProps>();
	const { login, isLoginLoading } = useAuthLoginMutation();
	const { goToHome } = useNavigation();

	const onSubmit = handleLoginSubmit(goToHome, login);

	return (
		<LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
			<LoginFlex>
				<Input
					type='text'
					placeholder='이메일을 입력하세요.'
					{...register('userEmail', {
						required: '이메일 아이디를 입력해주세요.',
					})}
				/>
				<Input
					type='password'
					placeholder='비밀번호를 입력해주세요.'
					{...register('userPassword', {
						required: '비밀번호를 입력해주세요.',
					})}
				/>
				<Button variant='primary' size='large' withBorder={false} type='submit'>
					{isLoginLoading ? '로그인 중...' : '로그인'}
				</Button>
			</LoginFlex>
		</LoginFormContainer>
	);
};

export default LoginForm;
