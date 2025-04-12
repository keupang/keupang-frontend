import React, { ReactNode, RefObject } from 'react';
import ReactDOM from 'react-dom';
import {
	DropdownToggleContainer,
	DropdownContentContainer,
} from './Dropdown.styles';

interface DropdownProps {
	label: string;
	children: ReactNode;
	position: { top: number; left: number };
	isOpen: boolean;
	toggleRef: RefObject<HTMLDivElement>;
	openDropdown: () => void;
	closeDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
	label,
	children,
	position,
	isOpen,
	toggleRef,
	openDropdown,
	closeDropdown,
}) => {
	return (
		<div
			ref={toggleRef}
			onMouseEnter={openDropdown}
			onMouseLeave={closeDropdown}>
			<DropdownToggleContainer>
				<span>{label}</span>
				<span className='dropdown-arrow'>▼</span>
			</DropdownToggleContainer>
			{isOpen &&
				ReactDOM.createPortal(
					<DropdownContentContainer
						style={{
							top: position.top,
							left: position.left,
						}}>
						{children}
					</DropdownContentContainer>,
					document.body
				)}
		</div>
	);
};

export default Dropdown;
