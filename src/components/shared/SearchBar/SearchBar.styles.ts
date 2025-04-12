import styled from '@emotion/styled';
import { Input } from '@/styles/commonStyles';
import { Button } from '@/components/common/Button/Button';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	width: 100%;
`;

export const InputContainer = styled.div`
	position: relative;
	width: 80%;
	display: flex;
`;

export const SearchInput = styled(Input)`
	width: 98%;
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text};

	${mediaQuery('md')} {
		padding: 0;
	}
`;

export const SearchIcon = styled.span`
	position: absolute;
	left: ${({ theme }) => theme.spacing.sm};
	top: ${({ theme }) => theme.spacing.sm};
	pointer-events: none;

	svg {
		width: 20px;
		height: 20px;
	}

	${InputContainer}:focus-within & {
		display: none;
	}

	${mediaQuery('md')} {
		display: none;
	}
`;

export const SearchButton = styled(Button)`
	padding: ${({ theme }) => theme.spacing.sm};
`;
