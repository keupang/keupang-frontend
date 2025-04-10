import styled from '@emotion/styled';
import SearchBar from '@/components/SearchBar';
import ProfileCard from '@/components/ProfileCard';
import { Helmet } from 'react-helmet-async';

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
		<>
			<Helmet>
				<title>규팡 - 쿠팡 클론코딩 프로젝트</title>
				<meta
					name='description'
					content='규팡에서 상품을 카테고리, 키워드로 검색해보세요.'
				/>
			</Helmet>
			<MainPageContainer>
				<SearchBar />
				<ProfileCard />
			</MainPageContainer>
		</>
	);
};

export default MainPage;
