import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 80px 0;
	width: 100%;
	text-align: center;
	gap: 24px;

	${mediaQuery('md')} {
		padding: 48px 0;
		gap: 20px;
	}
`;

export const Image = styled.img`
	width: 160px;
	height: 160px;
	object-fit: contain;

	${mediaQuery('md')} {
		width: 120px;
		height: 120px;
	}
`;

export const Title = styled.h2<{ color?: keyof Theme['colors'] }>`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme, color = 'text' }) => theme.colors[color]};
	font-weight: bold;

	${mediaQuery('md')} {
		font-size: ${({ theme }) => theme.fontSizes.lg};
	}
`;

export const Description = styled.p<{ color?: keyof Theme['colors'] }>`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme, color = 'secondary' }) => theme.colors[color]};
	line-height: 1.6;

	${mediaQuery('md')} {
		font-size: ${({ theme }) => theme.fontSizes.sm};
	}
`;
