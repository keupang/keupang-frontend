import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { mediaQuery } from '../utils/mediaQuery';
import { ActionButtons } from './ActionButtons';
import { NavLinks } from './NavLinks';

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

	${mediaQuery('1000px')} {
		flex-direction: column;
		padding: ${({ theme }) => theme.spacing.md};
		gap: ${({ theme }) => theme.spacing.md};
	}
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;

	img {
		width: auto;
		height: 30px;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Logo to='/'>
				<img src={logo} alt='KEUPANG 로고' />
			</Logo>
			<NavLinks />
			<ActionButtons isMobile={window.innerWidth <= 768} />
		</HeaderContainer>
	);
};

export default Header;
