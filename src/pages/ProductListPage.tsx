import styled from '@emotion/styled';
import { ProductList } from '@/components/ProductList';
import ProductFilterBar from '@/components/ProductFilterBar';
import SearchBar from '@/components/shared/SearchBar';
import SeoHelmet from '../components/shared/SeoHelmet';

interface ProductListPageProps {}

// 스타일 정의
const ProductListPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const ProductListPage: React.FC<ProductListPageProps> = () => {
	return (
		<>
			<SeoHelmet
				title='상품 목록 | 규팡'
				description='최신 상품을 가격, 카테고리로 검색해보세요.'
				url='https://keupang.store/products'
				image='https://keupang.store/og-image.jpg'
			/>

			<ProductListPageContainer>
				<ProductFilterBar />
				<SearchBar />
				<ProductList />
			</ProductListPageContainer>
		</>
	);
};

export default ProductListPage;
