import styled from '@emotion/styled';
import SearchBar from '@/components/SearchBar';
import ProfileCard from '@/components/ProfileCard';

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
	return (
		<MainPageContainer>
			<SearchBar />
			<ProfileCard />
		</MainPageContainer>
	);
};

export default MainPage;
