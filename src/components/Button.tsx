import styled from '@emotion/styled';

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'danger';
	size?: 'small' | 'medium' | 'large';
	type?: 'button' | 'submit' | 'reset';
	withBorder?: boolean;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ theme, variant, withBorder }) =>
		withBorder
			? theme.colors.background
			: variant === 'primary'
				? theme.colors.primary
				: variant === 'danger'
					? theme.colors.danger
					: theme.colors.secondary};
	color: ${({ theme, variant, withBorder }) =>
		withBorder
			? theme.colors.text
			: variant === 'primary'
				? theme.colors.buttonText
				: theme.colors.buttonText};
	padding: ${({ theme, size }) => {
		const basePadding = parseFloat(theme.spacing.sm) * 1.2;
		const sizePadding =
			size === 'small'
				? parseFloat(theme.spacing.sm) * 1.5
				: size === 'large'
					? parseFloat(theme.spacing.lg) * 1.5
					: parseFloat(theme.spacing.md) * 1.5;

		return `${basePadding}px ${sizePadding}px`;
	}};

	border: ${({ theme, withBorder }) =>
		withBorder ? `2px solid ${theme.colors.text}` : 'none'};
	border-radius: 8px;
	cursor: pointer;
	opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
	transition:
		background-color 0.3s,
		border-color 0.3s;
	text-align: center;
	white-space: nowrap;

	&:hover {
		background-color: ${({ theme, variant, withBorder }) =>
			withBorder
				? theme.colors.hover.secondary
				: variant === 'primary'
					? theme.colors.hover.primary
					: variant === 'danger'
						? theme.colors.hover.danger
						: theme.colors.hover.secondary};
		border-color: ${({ theme, withBorder }) =>
			withBorder ? theme.colors.text : 'transparent'};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: calc(${({ theme }) => theme.spacing.sm} * 0.5)
			calc(
				${({ theme, size }) =>
					size === 'small'
						? `${theme.spacing.sm} * 1.5`
						: size === 'large'
							? `${theme.spacing.lg} * 1.5`
							: `${theme.spacing.md} * 1.5`}
			);
		font-size: ${({ size }) =>
			size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: calc(${({ theme }) => theme.spacing.sm} * 0.5)
			calc(
				${({ theme, size }) =>
					size === 'small'
						? `${theme.spacing.sm} * 1.5`
						: size === 'large'
							? `${theme.spacing.lg} * 1.5`
							: `${theme.spacing.md} * 1.5`}
			);
		font-size: ${({ size }) =>
			size === 'small' ? '10px' : size === 'large' ? '14px' : '12px'};
	}
`;

export const Button = ({
	variant = 'primary',
	size = 'medium',
	withBorder = false,
	disabled = false,
	onClick,
	children,
	style,
}: ButtonProps) => (
	<StyledButton
		variant={variant}
		size={size}
		withBorder={withBorder}
		disabled={disabled}
		onClick={onClick}
		style={style}>
		{children}
	</StyledButton>
);
