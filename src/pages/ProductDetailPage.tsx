import { useEffect } from 'react';
import styled from '@emotion/styled';

interface ProductDetailPageProps {}

// 스타일 정의
const ProductDetailPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return (
		<ProductDetailPageContainer>컴포넌트 작성하기</ProductDetailPageContainer>
	);
};

export default ProductDetailPage;
