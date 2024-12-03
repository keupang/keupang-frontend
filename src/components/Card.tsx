import styled from '@emotion/styled';

interface CardProps {
	header?: React.ReactNode;
	content: React.ReactNode;
	footer?: React.ReactNode;
	variant?: 'default' | 'outlined';
}

const CardContainer = styled.div<{ variant: 'default' | 'outlined' }>`
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	border: ${({ variant, theme }) =>
		variant === 'outlined' ? `1px solid ${theme.colors.secondary}` : 'none'};
	border-radius: 8px;
	box-shadow: ${({ variant }) =>
		variant === 'default' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
	padding: ${({ theme }) => theme.spacing.md};
	max-width: 400px;
	margin: ${({ theme }) => theme.spacing.md} auto;
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}
`;

const CardHeader = styled.div`
	font-size: 1.25rem;
	font-weight: 700;
	margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardContent = styled.div`
	font-size: 1rem;
	margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardFooter = styled.div`
	text-align: right;
	font-size: 0.875rem;
	color: ${({ theme }) => theme.colors.secondary};
`;

export const Card: React.FC<CardProps> = ({
	header,
	content,
	footer,
	variant = 'default',
}) => (
	<CardContainer variant={variant} data-testid='card-container'>
		{header && <CardHeader>{header}</CardHeader>}
		<CardContent>{content}</CardContent>
		{footer && <CardFooter>{footer}</CardFooter>}
	</CardContainer>
);
