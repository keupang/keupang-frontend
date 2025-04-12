import { useEffect } from 'react';
import styled from '@emotion/styled';

interface MyPageProps {}

// 스타일 정의
const MyPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const MyPage: React.FC<MyPageProps> = () => {
	useEffect(() => {
		console.log(`useEffect를 설정하세요`);
	}, []);

	return <MyPageContainer>컴포넌트 작성하기</MyPageContainer>;
};

export default MyPage;
