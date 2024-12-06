import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CATEGORY_LINKS } from '../constants/navLinks';
import Dropdown from './Dropdown';
import { mediaQuery } from '../utils/utils';
import { useDropdown } from '../hooks/useDropdown';
import { useRef } from 'react';

const StyledNav = styled.nav`
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

export const NavLinks = () => {
	const {
		isOpen: isCategoryOpen,
		position: categoryPosition,
		openDropdown: openCategory,
		closeDropdown: closeCategory,
	} = useDropdown();

	const categoryRef = useRef<HTMLDivElement>(null);
	const myPageRef = useRef<HTMLDivElement>(null);
	const {
		isOpen: isMyPageOpen,
		position: myPagePosition,
		openDropdown: openMyPage,
		closeDropdown: closeMyPage,
	} = useDropdown();
	return (
		<StyledNav>
			{NAV_LINKS.map((link) => (
				<Link key={link.path} to={link.path}>
					{link.label}
				</Link>
			))}

			{/* 카테고리 드롭다운 */}
			<Dropdown
				label='카테고리'
				position={categoryPosition}
				isOpen={isCategoryOpen}
				toggleRef={categoryRef}
				openDropdown={() => openCategory(categoryRef)}
				closeDropdown={closeCategory}>
				{CATEGORY_LINKS.map((category) => (
					<Link key={category.path} to={category.path}>
						{category.label}
					</Link>
				))}
			</Dropdown>

			{/* 마이페이지 드롭다운 */}
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
