import { useEffect } from 'react';
import styled from '@emotion/styled';

interface SignupPageProps {}

// 스타일 정의
const SignupPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const SignupPage: React.FC<SignupPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <SignupPageContainer>컴포넌트 작성하기</SignupPageContainer>;
};

export default SignupPage;
