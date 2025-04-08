import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

export interface Stock {
	id: number;
	productId: number;
	saleState: string;
	price: number;
	quantity: number;
	createdAt: string;
	sales: number;
}

export interface Product {
	id: number;
	name: string;
	category: string;
	imageUrl: string;
}

export interface StockWithProduct {
	stock: Stock;
	product: Product;
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
		stocks: StockWithProduct[];
		pagination: Pagination;
	};
}

export const getProducts = async (params?: {
	search?: string;
	page?: number;
	size?: number;
	category?: string;
	minPrice?: number;
	maxPrice?: number;
	sortBy?: string;
}): Promise<ProductsResponse> => {
	const { data } = await axiosInstance.get(END_POINTS.GETSTOCK, {
		params,
		authRequired: false,
	} as CustomAxiosRequestConfig);
	return data;
};
