import { useEffect } from 'react';
import styled from '@emotion/styled';

interface NotFoundPageProps {}

// 스타일 정의
const NotFoundPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <NotFoundPageContainer>컴포넌트 작성하기</NotFoundPageContainer>;
};

export default NotFoundPage;
