import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

export interface Product {
	item_id: number;
	photo: string;
	name: string;
	price: number;
	category: string;
}

export interface Pagination {
	current_page: number;
	total_pages: number;
	total_items: number;
	hasNext: boolean;
}

export interface ProductsResponse {
	status: number;
	code: number;
	message: string;
	content: { detail: string };
	data: {
		products: Product[];
		pagination: Pagination;
	};
}

export const getProducts = async (params?: {
	search?: string;
	page?: number;
	size?: number;
	category?: string;
}): Promise<ProductsResponse> => {
	const { data } = await axiosInstance.get(END_POINTS.GETPRODUCTS, {
		params,
		authRequired: false,
	} as CustomAxiosRequestConfig);
	return data;
};
