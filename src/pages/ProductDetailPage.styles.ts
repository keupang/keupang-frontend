import styled from '@emotion/styled';
import { mediaQuery } from '@/utils/mediaQuery';

export const ProductDetailPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

export const ProductTopSection = styled.div`
	display: flex;
	gap: 32px;
	margin-bottom: 48px;

	${mediaQuery('md')} {
		flex-direction: column;
		align-items: center;
	}
`;

export const MainImage = styled.img`
	width: 100%;
	max-width: 30rem;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	border-radius: 0.75rem;
	margin-bottom: 1rem;

	${mediaQuery('md')} {
		max-width: 100%;
	}
`;

export const ThumbnailList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-wrap: wrap;
	justify-content: center;

	${mediaQuery('md')} {
		flex-direction: row;
		overflow-x: auto;
		width: 100%;
		justify-content: flex-start;
		margin-bottom: 1rem;
	}
`;

export const Thumbnail = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;
	border: 1px solid #ccc;
	border-radius: 6px;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const ProductInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const ProductTitle = styled.h1`
	font-size: 24px;
	font-weight: bold;
`;

export const ProductPrice = styled.div`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
`;

export const ProductCategory = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.secondary};
`;

export const ActionButtons = styled.div`
	margin-top: 16px;
	display: flex;
	gap: 12px;
	margin-top: auto;

	${mediaQuery('md')} {
		flex-direction: column;
		align-items: stretch;
		width: 100%;
	}
`;

export const DetailImageSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const DetailImage = styled.img`
	width: 100%;
	max-width: 600px;
	object-fit: contain;
`;

export const QuantityInput = styled.input`
	width: 60px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 16px;
	text-align: center;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		opacity: 1;
	}

	${mediaQuery('md')} {
		width: 100%;
	}
`;
