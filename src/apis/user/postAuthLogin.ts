import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

export interface LoginAuthData {
	userEmail: string;
	userPassword: string;
}

const postAuthLogin = async (data: LoginAuthData) => {
	const response = await axiosInstance.post(`${END_POINTS.LOGIN}`, data, {
		authRequired: false,
	} as CustomAxiosRequestConfig);

	return response.data;
};

export default postAuthLogin;
