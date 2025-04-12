import { StyledButton } from './Button.styles';

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
