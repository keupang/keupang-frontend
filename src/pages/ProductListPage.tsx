import { useEffect } from 'react';
import styled from '@emotion/styled';

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
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <ProductListPageContainer>컴포넌트 작성하기</ProductListPageContainer>;
};

export default ProductListPage;
