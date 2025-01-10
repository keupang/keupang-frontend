import type { InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';

export interface SuccessType<T> {
	code: number;
	status: number;
	message: string;
	content: {
		detail: string;
	};
	data: T;
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
	authRequired?: boolean;
}

export interface CustomInternalAxiosRequestConfig
	extends InternalAxiosRequestConfig {
	authRequired?: boolean;
}
