import styled from '@emotion/styled';
import SignupForm from './components/SignupForm/SignupForm';

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
	return (
		<SignupPageContainer>
			<SignupForm />
		</SignupPageContainer>
	);
};

export default SignupPage;
