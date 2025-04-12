import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const Flex = styled.div<{
	direction?: 'row' | 'column';
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around';
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
	gap: string;
	height?: string;
	margin?: string;
}>`
	display: flex;
	flex-direction: ${({ direction = 'row' }) => direction};
	justify-content: ${({ justify = 'flex-start' }) => justify};
	align-items: ${({ align = 'stretch' }) => align};
	gap: ${({ gap }) => `${gap}px`};
	height: ${({ height }) => height};

	${mediaQuery('md')} {
		flex-direction: column;
		gap: 24px;
		margin: ${({ margin }) => margin};
	}
`;

export const ImageWrapper = styled.div<{ size?: string }>`
	width: ${({ size = '150px' }) => size};
	height: ${({ size = '150px' }) => size};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 8px;

	img {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const Heading = styled.h1<{
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme, size = 'md' }) =>
		size === 'sm'
			? theme.fontSizes.sm
			: size === 'md'
				? theme.fontSizes.md
				: size === 'lg'
					? theme.fontSizes.lg
					: theme.fontSizes.xl};
	color: ${({ theme, color = 'text' }) => theme.colors[color]};
	font-weight: bold;
`;

export const Text = styled.p<{
	size?: 'sm' | 'md' | 'lg';
	weight?: 'normal' | 'medium' | 'bold';
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme, size = 'md' }) =>
		size === 'sm'
			? theme.fontSizes.sm
			: size === 'md'
				? theme.fontSizes.md
				: theme.fontSizes.lg};
	font-weight: ${({ weight = 'normal' }) => weight};
	color: ${({ theme, color = 'secondary' }) => theme.colors[color]};
`;
