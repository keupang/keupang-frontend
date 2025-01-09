import styled from '@emotion/styled';
import { Title } from '@/styles/commonStyles';
import LoginForm from '@/components/LoginForm';

interface LoginPageProps {}

const LoginPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5%;
	justify-content: center;
	align-items: flex-start;
	background-color: #6b7280;
	color: #ffffff;
	min-height: 40vh;
	gap: 20px;
`;

const Notice = styled.p``;

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<LoginPageContainer>
			<Title>로그인하여 쇼핑을 시작하세요.</Title>
			<Notice>이메일과 비밀번호를 입력하여 계정에 로그인하세요.</Notice>
			<LoginForm />
		</LoginPageContainer>
	);
};

export default LoginPage;
