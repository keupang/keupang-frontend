import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Card = styled.div`
	width: 200px;
	height: 300px;
	border-radius: 8px;

	background: ${({ theme }) =>
		theme.colors.background === '#1f2937'
			? 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)'
			: 'linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%)'};

	background-size: 200% 100%;
	animation: ${shimmer} 1.2s ease-in-out infinite;
`;

const SkeletonCard = () => <Card />;

export default SkeletonCard;
