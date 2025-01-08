import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { setAuthorizedRequest, handleAPIError } from './axiosInterceptors';
import { BASE_URL, NETWORK_TIMEOUT } from '../constants/apis';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: NETWORK_TIMEOUT,
	withCredentials: true,
	authRequired: true,
} as AxiosRequestConfig);

axiosInstance.interceptors.request.use(setAuthorizedRequest, handleAPIError);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (!error.response) {
			toast.error('서버와 연결할 수 없습니다. 네트워크 상태를 확인해주세요.');
		} else if (error.response.status >= 500) {
			toast.error('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
		}
		return Promise.reject(error); // 여전히 상위에서 추가 처리 가능
	}
);
