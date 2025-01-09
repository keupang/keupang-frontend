import styled from '@emotion/styled';

export const Title = styled.h1`
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing.md};
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

export const Flex = styled.div`
	display: flex;
`;
