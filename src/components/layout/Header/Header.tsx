import logo from '@/assets/images/logo.svg';
import { HeaderContainer, Logo } from './Header.styles';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { NavLinks } from './components/NavLinks/NavLinks';

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
