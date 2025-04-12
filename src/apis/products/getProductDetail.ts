import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '@/constants/api/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

export interface ProductDetailResponse {
	status: number;
	code: number;
	message: string;
	content: { detail: string };
	data: {
		stock: {
			stockId: number;
			productId: number;
			productName: string;
			productImage: string;
			category: string;
			price: number;
			quantity: number;
			saleState: string;
			detailImages: string[];
		};
	};
}

export const getProductDetail = async (
	productId: number
): Promise<ProductDetailResponse> => {
	const { data } = await axiosInstance.get(
		END_POINTS.GET_DETAIL_PRODUCT(productId),
		{ authRequired: false } as CustomAxiosRequestConfig
	);
	return data;
};
