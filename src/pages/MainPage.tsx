import styled from '@emotion/styled';

interface MainPageProps {}

// 스타일 정의
const MainPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const MainPage: React.FC<MainPageProps> = () => {
	return <MainPageContainer>컴포넌트 작성하기</MainPageContainer>;
};

export default MainPage;
