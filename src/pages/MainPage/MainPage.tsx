import styled from '@emotion/styled';
import SearchBar from '@/components/shared/SearchBar';
import ProfileCard from './components/ProfileCard';
import SeoHelmet from '@/components/shared/SeoHelmet';

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
			<SeoHelmet
				title='규팡 - 상품 검색 플랫폼'
				description='카테고리, 키워드, 가격 조건으로 인기 상품을 손쉽게 찾아보세요.'
				url='https://keupang.store/'
				image='https://keupang.store/og-image.jpg'
			/>
			<MainPageContainer>
				<SearchBar />
				<ProfileCard />
			</MainPageContainer>
		</>
	);
};

export default MainPage;
