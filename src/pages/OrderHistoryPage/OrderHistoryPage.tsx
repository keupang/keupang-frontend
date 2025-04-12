import { useEffect } from 'react';
import styled from '@emotion/styled';

interface OrderHistoryPageProps {}

// 스타일 정의
const OrderHistoryPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return (
		<OrderHistoryPageContainer>컴포넌트 작성하기</OrderHistoryPageContainer>
	);
};

export default OrderHistoryPage;
