import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@/apis/products/getProductDetail';

export const useProductDetail = (productId: number) => {
	return useQuery({
		queryKey: ['productDetail', productId],
		queryFn: () => getProductDetail(productId),
		enabled: !!productId,
	});
};
