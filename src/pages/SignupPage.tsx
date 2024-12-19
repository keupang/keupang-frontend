import { useEffect } from 'react';
import styled from '@emotion/styled';
import SignupForm from '../components/SignupForm';

interface SignupPageProps {}

const SignupPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #6b7280;
	color: #ffffff;
	min-height: 70vh;
`;

const SignupPage: React.FC<SignupPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return (
		<SignupPageContainer>
			<SignupForm />
		</SignupPageContainer>
	);
};

export default SignupPage;
