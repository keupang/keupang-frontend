import { useEffect } from 'react';
import styled from '@emotion/styled';

interface CartPageProps {}

// 스타일 정의
const CartPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const CartPage: React.FC<CartPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <CartPageContainer>컴포넌트 작성하기</CartPageContainer>;
};

export default CartPage;
