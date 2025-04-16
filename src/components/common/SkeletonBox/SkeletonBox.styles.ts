import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const getSkeletonBackground = (theme: any) =>
	theme.colors.background === '#1f2937'
		? 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)'
		: 'linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%)';

export const SkeletonBox = styled.div<{ width?: string; height?: string }>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	border-radius: 8px;

	background: ${({ theme }) => getSkeletonBackground(theme)};
	background-size: 200% 100%;
	animation: ${shimmer} 1.2s ease-in-out infinite;
`;
