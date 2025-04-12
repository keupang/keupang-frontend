import { useCallback, useState } from 'react';
import { getProducts, StockWithProduct } from '@/apis/products/getProducts';
import estimateInitialSize from '../../utils/lcp/estimateInitialSize';
import { useErrorBoundary } from 'react-error-boundary';

export interface ProductQueryParams {
	search?: string;
	category?: string | null;
	minPrice?: number;
	maxPrice?: number;
	sortBy?: string;
}

export const useProductsInfinite = () => {
	const { showBoundary } = useErrorBoundary();
	const [products, setProducts] = useState<StockWithProduct[]>([]);
	const [page, setPage] = useState(0);
	const [hasNextPage, setHasNextPage] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState<ProductQueryParams>({});
	const initialSize = estimateInitialSize();

	const loadProducts = useCallback(
		async (pageNum: number, newQuery?: ProductQueryParams) => {
			setIsLoading(true);

			try {
				const mergedQuery = newQuery ?? query;
				if (newQuery) setQuery(newQuery);

				const res = await getProducts({
					page: pageNum,
					size: pageNum === 0 ? initialSize : 10,
					search: mergedQuery.search ?? ' ',
					category: mergedQuery.category ?? undefined,
					minPrice: mergedQuery.minPrice,
					maxPrice: mergedQuery.maxPrice,
					sortBy: mergedQuery.sortBy,
				});
				const newItems = res.data.stocks;

				setProducts((prev) =>
					pageNum === 0 ? newItems : [...prev, ...newItems]
				);
				setHasNextPage(res.data.pagination.hasNext);
			} catch (error) {
				showBoundary(error);
			} finally {
				setIsLoading(false);
			}
		},
		[query, showBoundary]
	);

	const reset = useCallback(() => {
		setProducts([]);
		setPage(0);
		setHasNextPage(true);
	}, []);

	return {
		products,
		isLoading,
		hasNextPage,
		page,
		setPage,
		loadProducts,
		reset,
		initialSize,
	};
};
