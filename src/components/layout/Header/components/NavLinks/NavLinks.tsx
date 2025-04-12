import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CATEGORY_LINKS } from '@/constants/navigation/navLinks';
import Dropdown from './Dropdown/Dropdown';
import { useDropdown } from '@/hooks/useDropdown';
import { useNavigation } from '@/hooks/useNavigation';
import { StyledNav, CategoryBtn } from './NavLinks.styles';

export const NavLinks = () => {
	const {
		isOpen: isCategoryOpen,
		position: categoryPosition,
		openDropdown: openCategory,
		closeDropdown: closeCategory,
	} = useDropdown();

	const {
		isOpen: isMyPageOpen,
		position: myPagePosition,
		openDropdown: openMyPage,
		closeDropdown: closeMyPage,
	} = useDropdown();

	const categoryRef = useRef<HTMLDivElement>(null!);
	const myPageRef = useRef<HTMLDivElement>(null!);
	const { goToCategory } = useNavigation();

	return (
		<StyledNav>
			{NAV_LINKS.map((link) => (
				<Link key={link.path} to={link.path}>
					{link.label}
				</Link>
			))}

			<Dropdown
				label='카테고리'
				position={categoryPosition}
				isOpen={isCategoryOpen}
				toggleRef={categoryRef}
				openDropdown={() => openCategory(categoryRef)}
				closeDropdown={closeCategory}>
				{CATEGORY_LINKS.map((category) => (
					<CategoryBtn
						key={category.path}
						onClick={() => goToCategory(category.path)}>
						{category.label}
					</CategoryBtn>
				))}
			</Dropdown>

			<Dropdown
				label='마이페이지'
				position={myPagePosition}
				isOpen={isMyPageOpen}
				toggleRef={myPageRef}
				openDropdown={() => openMyPage(myPageRef)}
				closeDropdown={closeMyPage}>
				<Link to='/mypage/orders'>주문 내역</Link>
				<Link to='/mypage/profile'>내 정보</Link>
				<Link to='/mypage/products'>판매 정보</Link>
			</Dropdown>
		</StyledNav>
	);
};
