import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

	${mediaQuery('1030px')} {
		flex-direction: column;
		padding: ${({ theme }) => theme.spacing.md};
		gap: ${({ theme }) => theme.spacing.md};
	}
`;

export const Logo = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;

	img {
		width: auto;
		height: 30px;
	}
`;
