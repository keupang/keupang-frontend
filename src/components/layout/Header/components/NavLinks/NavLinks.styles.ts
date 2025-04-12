import styled from '@emotion/styled';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const StyledNav = styled.nav`
	display: flex;
	gap: ${({ theme }) => theme.spacing.lg};
	align-items: center;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.text};
		font-size: ${({ theme }) => theme.fontSizes.md};

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	${mediaQuery('md')} {
		justify-content: flex-start;
		flex-wrap: nowrap;
		white-space: nowrap;
		scrollbar-width: auto;
		overflow-x: auto;
		width: 100%;

		&::-webkit-scrollbar {
			height: 2px;
			background: ${({ theme }) => theme.colors.secondary};
		}

		&::-webkit-scrollbar-thumb {
			background: ${({ theme }) => theme.colors.primary};
			border-radius: 4px;
		}
	}
`;

export const CategoryBtn = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	color: inherit;
	padding: ${({ theme }) => theme.spacing.sm};
	width: 100%;
	text-align: left;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
