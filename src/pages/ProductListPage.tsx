import styled from '@emotion/styled';
import { ProductList } from '@/components/ProductList';
import ProductFilterBar from '@/components/ProductFilterBar';
import SearchBar from '@/components/SearchBar';

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
		<ProductListPageContainer>
			<ProductFilterBar />
			<SearchBar />
			<ProductList />
		</ProductListPageContainer>
	);
};

export default ProductListPage;
