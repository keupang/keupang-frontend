import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	border-top: 1px solid ${({ theme }) => theme.colors.text};
	font-size: 0.9rem;
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 8px;

	a {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		font-weight: 500;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const FooterText = styled.p`
	margin: 0;
	padding: 8px 0;
	text-align: center;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.secondary};
`;
