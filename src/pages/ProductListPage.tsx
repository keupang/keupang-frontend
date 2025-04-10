import styled from '@emotion/styled';
import { ProductList } from '@/components/ProductList';
import ProductFilterBar from '@/components/ProductFilterBar';
import SearchBar from '@/components/SearchBar';
import { Helmet } from 'react-helmet-async';

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
			<Helmet>
				<title>상품 목록 | 규팡</title>
				<meta
					name='description'
					content='규팡에서 상품을 카테고리, 키워드로 검색해보세요.'
				/>
			</Helmet>
			<ProductListPageContainer>
				<ProductFilterBar />
				<SearchBar />
				<ProductList />
			</ProductListPageContainer>
		</>
	);
};

export default ProductListPage;
