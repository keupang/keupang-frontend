import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import SkeletonCard from './SkeletonCard';
import { useProductsInfinite } from '../hooks/products/useProductsInfinite';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useNavigation } from '@/hooks/useNavigation';
import useQueryParams from '@/hooks/useQueryParams';
import EmptyModal from './EmptyModal';
import { useOverlay } from '@/hooks/useOverlay';
import { Flex } from '@/styles/commonStyles';

const ProductListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 16px;
	justify-items: center;
	padding: 16px;
	width: 100%;
	margin: 0 auto;
`;
const ProductCard = styled.div`
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
const ProductImage = styled.img`
	width: 100%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	border-radius: 8px;
`;

const ProductTitle = styled.h5`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.4;
	height: calc(1.4em * 2);
`;

const ProductCategory = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	color: ${({ theme }) => theme.colors.secondary};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: underline;
	}
`;

const ProductMeta = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSizes.sm};
	color: ${({ theme }) => theme.colors.text};
`;

const ProductPrice = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
`;

const ProductStock = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	color: ${({ theme }) => theme.colors.secondary};
`;

const ProductScore = styled.div``;

const EndOfListText = styled.div`
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

export const ProductList = () => {
	const {
		products,
		isLoading,
		hasNextPage,
		page,
		setPage,
		loadProducts,
		reset,
	} = useProductsInfinite();
	const observerRef = useRef<HTMLDivElement>(null);
	const { goToCategory, goToProductDetail } = useNavigation();
	const { getQuery } = useQueryParams();
	const emptyOverlay = useOverlay();

	const category = getQuery('category');
	const search = getQuery('search');
	const minPrice = parseInt(getQuery('minPrice') || '') || undefined;
	const maxPrice = parseInt(getQuery('maxPrice') || '') || undefined;
	const sortBy = getQuery('sortBy');

	const queryParams = {
		category,
		search,
		minPrice,
		maxPrice,
		sortBy,
	};

	useEffect(() => {
		if (!isLoading && products.length === 0) {
			emptyOverlay.open();
		} else {
			emptyOverlay.close();
		}
	}, [products, isLoading]);

	useEffect(() => {
		loadProducts(0, queryParams);
	}, [category, search, minPrice, maxPrice, sortBy]);

	useEffect(() => {
		if (page > 0 && !isLoading) {
			loadProducts(page);
		}
	}, [page]);

	useEffect(() => {
		if (
			document.body.scrollHeight <= window.innerHeight &&
			hasNextPage &&
			!isLoading
		) {
			setPage((prev: number) => prev + 1);
		}
	}, [products]);

	useInfiniteScroll({
		ref: observerRef,
		canLoadMore: hasNextPage,
		isLoading,
		onIntersect: () => setPage((prev: number) => prev + 1),
	});

	const handleCategoryClick = (newCategory: string) => {
		if (newCategory !== category) {
			goToCategory(newCategory);
			reset();
		}
	};

	return (
		<ProductListContainer>
			{products.map((item) => (
				<ProductCard
					key={`${item.product.id}-${item.stock.id}`}
					onClick={() => goToProductDetail(item.stock.id)}>
					<ProductImage
						src={item.product.imageUrl}
						alt={item.product.name}
						loading='lazy'
					/>
					<ProductTitle>{item.product.name}</ProductTitle>

					<ProductMeta>
						<ProductPrice>{item.stock.price.toLocaleString()}원</ProductPrice>
						<ProductStock>재고 {item.stock.quantity}</ProductStock>
					</ProductMeta>
					<Flex>
						<ProductScore></ProductScore>
						<ProductCategory
							onClick={(e) => {
								e.stopPropagation();
								handleCategoryClick(item.product.category);
							}}>
							{item.product.category}
						</ProductCategory>
					</Flex>
				</ProductCard>
			))}

			<div ref={observerRef} style={{ height: 1 }} />

			{isLoading &&
				Array.from({ length: 6 }).map((_, i) => (
					<SkeletonCard key={`s-${i}`} />
				))}
			{!hasNextPage && products.length > 0 && !isLoading && (
				<EndOfListText>👀 더 이상 상품이 없어요!</EndOfListText>
			)}

			<EmptyModal isOpen={emptyOverlay.isOpen} onClose={emptyOverlay.close} />
		</ProductListContainer>
	);
};
