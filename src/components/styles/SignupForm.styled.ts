import styled from '@emotion/styled';
import { mediaQuery } from '../../utils/utils';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing.lg};
	width: 100%;
`;

export const Title = styled.h1`
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	gap: ${({ theme }) => theme.spacing.sm};
	width: 50%;
	margin-bottom: ${({ theme }) => theme.spacing.md};

	${mediaQuery('md')} {
		width: 100%;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: ${({ theme }) => theme.spacing.sm};
	border: 1px solid #ffffff;
	border-radius: 4px;
	font-size: ${({ theme }) => theme.fontSizes.md};
	background-color: #6b7280;
	color: #ffffff;
	display: flex;

	&::placeholder {
		color: #cccccc;
	}
	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary};
	}

	&:disabled {
		background-color: #3e3e3e;
		color: #a1a1a1;
		border-color: #555555;
		cursor: not-allowed;
	}
`;

export const ErrorText = styled.p`
	color: ${({ theme }) => theme.colors.danger};
	font-size: ${({ theme }) => theme.fontSizes.sm};
	margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

export const Notice = styled.p`
	text-align: center;
	margin-top: ${({ theme }) => theme.spacing.md};
	font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ToggleIcon = styled.button`
	position: absolute;
	right: ${({ theme }) => theme.spacing.sm};
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	cursor: pointer;
	color: #ffffff;
	font-size: 1.2rem;

	&:focus {
		outline: none;
	}
`;

export const EmailInput = styled(Input)`
	flex: 2;
	padding-right: 30px;
`;

export const Select = styled.select`
	flex: 1;
	padding: ${({ theme }) => theme.spacing.sm};
	border: 1px solid #ffffff;
	border-radius: 4px;
	font-size: ${({ theme }) => theme.fontSizes.md};
	background-color: #6b7280;
	color: #ffffff;

	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const AtSymbol = styled.span<{ leftOffset: number }>`
	position: absolute;
	left: ${({ leftOffset }) => `${leftOffset}px`};
	top: 50%;
	transform: translateY(-50%);
	color: #ffffff;
	pointer-events: none;
`;

export const Timer = styled.span<{
	isTimerExpired: boolean;
	isConfirmEmail: boolean;
}>`
	color: ${({ isTimerExpired, isConfirmEmail, theme }) =>
		isTimerExpired && !isConfirmEmail ? theme.colors.danger : '#ffffff'};
	font-size: ${({ theme }) => theme.fontSizes.xs};
`;
