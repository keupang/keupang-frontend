import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { LoginFlex } from './styles/LoginForm.styled';
import { Input } from '@/styles/commonStyles';
import { Button } from './Button';

export interface LoginFormProps {
	email: string;
	password: string;
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

	const onSubmit = (data: LoginFormProps) => {
		console.log('Submitted data:', data);
	};

	return (
		<LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
			<LoginFlex>
				<Input
					type='text'
					placeholder='이메일을 입력하세요.'
					{...register('email', { required: '이메일 아이디를 입력해주세요.' })}
				/>
				<Input
					type='password'
					placeholder='비밀번호를 입력해주세요.'
					{...register('password', {
						required: '비밀번호를 입력해주세요.',
					})}
				/>
				<Button variant='primary' size='large' withBorder={false} type='submit'>
					로그인
				</Button>
			</LoginFlex>
		</LoginFormContainer>
	);
};

export default LoginForm;
