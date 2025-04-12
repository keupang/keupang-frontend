import { useEffect, useRef } from 'react';
import {
	ProductListContainer,
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductMeta,
	ProductPrice,
	ProductStock,
	ProductCategory,
	ProductScore,
	EndOfListText,
} from './ProductList.styles';

import SkeletonCard from '@/components/common/SkeletonCard/SkeletonCard';
import { useProductsInfinite } from '@/hooks/products/useProductsInfinite';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useNavigation } from '@/hooks/useNavigation';
import useQueryParams from '@/hooks/useQueryParams';
import EmptyModal from '@/components/shared/EmptyModal/EmptyModal';
import { useOverlay } from '@/hooks/useOverlay';
import { Flex } from '@/styles/commonStyles';

export const ProductList = () => {
	const {
		products,
		isLoading,
		hasNextPage,
		page,
		setPage,
		loadProducts,
		reset,
		initialSize,
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
			setPage((prev) => prev + 1);
		}
	}, [products]);

	useInfiniteScroll({
		ref: observerRef,
		canLoadMore: hasNextPage,
		isLoading,
		onIntersect: () => setPage((prev) => prev + 1),
	});

	const handleCategoryClick = (newCategory: string) => {
		if (newCategory !== category) {
			goToCategory(newCategory);
			reset();
		}
	};

	return (
		<ProductListContainer>
			{products.map((item, idx) => (
				<ProductCard
					key={`${item.product.id}-${item.stock.id}`}
					onClick={() => goToProductDetail(item.stock.id)}>
					<ProductImage
						src={item.product.imageUrl}
						alt={item.product.name}
						loading={idx < initialSize ? 'eager' : 'lazy'}
						fetchPriority={idx < initialSize ? 'high' : 'auto'}
						decoding={idx >= initialSize ? 'async' : 'auto'}
					/>
					<ProductTitle>{item.product.name}</ProductTitle>

					<ProductMeta>
						<ProductPrice>{item.stock.price.toLocaleString()}원</ProductPrice>
						<ProductStock>재고 {item.stock.quantity}</ProductStock>
					</ProductMeta>

					<Flex>
						<ProductScore />
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
