import { useEffect } from 'react';
import styled from '@emotion/styled';

interface LoginPageProps {}

// 스타일 정의
const LoginPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const LoginPage: React.FC<LoginPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <LoginPageContainer>컴포넌트 작성하기</LoginPageContainer>;
};

export default LoginPage;
