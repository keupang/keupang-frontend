import type {
	InternalAxiosRequestConfig,
	AxiosRequestConfig,
	AxiosRequestHeaders,
} from 'axios';

export interface SuccessType<T> {
	code: number;
	status: number;
	message: string;
	content: {
		detail: string;
	};
	data: T;
}

export interface CustomInternalAxiosRequestConfig
	extends InternalAxiosRequestConfig {
	authRequired?: boolean;
	headers: AxiosRequestHeaders;
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
	authRequired?: boolean;
}
