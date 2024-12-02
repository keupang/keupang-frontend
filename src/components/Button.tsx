import styled from '@emotion/styled';

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'danger';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ theme, variant }) =>
		variant === 'primary'
			? theme.colors.primary
			: variant === 'danger'
				? theme.colors.danger
				: theme.colors.secondary};
	color: ${({ theme }) => theme.colors.text};
	padding: ${({ theme, size }) =>
		size === 'small'
			? theme.spacing.sm
			: size === 'large'
				? theme.spacing.lg
				: theme.spacing.md};
	border: none;
	border-radius: 8px;
	cursor: pointer;
	margin-top: ${({ theme }) => theme.spacing.md};
	opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme, variant }) =>
			variant === 'primary'
				? theme.colors.secondary
				: variant === 'danger'
					? '#cc3333'
					: '#b0b0b0'};
	}

	@media (max-width: 768px) {
		padding: ${({ size }) =>
			size === 'small'
				? '6px 10px'
				: size === 'large'
					? '10px 20px'
					: '8px 16px'};
		font-size: ${({ size }) =>
			size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
	}

	@media (max-width: 480px) {
		width: 80%;
		padding: ${({ size }) =>
			size === 'small'
				? '4px 8px'
				: size === 'large'
					? '8px 16px'
					: '6px 12px'};
		font-size: ${({ size }) =>
			size === 'small' ? '10px' : size === 'large' ? '14px' : '12px'};
	}
`;

export const Button = ({
	variant = 'primary',
	size = 'medium',
	disabled = false,
	onClick,
	children,
}: ButtonProps) => (
	<StyledButton
		variant={variant}
		size={size}
		disabled={disabled}
		onClick={onClick}>
		{children}
	</StyledButton>
);
