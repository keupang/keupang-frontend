import styled from '@emotion/styled';

export const ProductListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 16px;
	justify-items: center;
	padding: 16px;
	width: 100%;
	margin: 0 auto;
`;

export const ProductCard = styled.div`
	width: 200px;
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	transition: transform 0.2s ease-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	border-radius: 8px;
`;

export const ProductTitle = styled.h5`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.4;
	height: calc(1.4em * 2);
`;

export const ProductMeta = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSizes.sm};
	color: ${({ theme }) => theme.colors.text};
`;

export const ProductPrice = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ProductStock = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductCategory = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	color: ${({ theme }) => theme.colors.secondary};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: underline;
	}
`;

export const ProductScore = styled.div``;

export const EndOfListText = styled.div`
	grid-column: 1 / -1;
	text-align: center;
	margin-top: 20px;
	padding: 12px 0;
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};

	animation: fadeIn 0.6s ease-in-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	& > span {
		margin-left: 6px;
	}
`;
