import styled from '@emotion/styled';

export const DropdownToggleContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	span {
		margin-left: ${({ theme }) => theme.spacing.sm};
		transition: transform 0.3s;
	}

	.dropdown-arrow {
		transition: transform 0.3s;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	&:hover .dropdown-arrow {
		transform: rotate(180deg);
	}
`;

export const DropdownContentContainer = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
	padding: ${({ theme }) => theme.spacing.sm};
	z-index: 9999;
	min-width: max-content;

	a,
	button {
		width: 100%;
		box-sizing: border-box;
		color: ${({ theme }) => theme.colors.text};
		text-decoration: none;
		display: block;
		padding: ${({ theme }) => theme.spacing.sm};

		&:hover {
			background-color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;
