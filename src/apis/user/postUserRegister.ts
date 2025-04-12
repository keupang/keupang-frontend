import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '@/constants/api/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

export interface RegisterUserData {
	userEmail: string;
	userPassword: string;
	userName: string;
	userPhone: string;
}

const postUserRegister = async (data: RegisterUserData) => {
	const response = await axiosInstance.post(
		`${END_POINTS.AUTHREGISTER}`,
		null,
		{
			params: { ...data },
			authRequired: false,
		} as CustomAxiosRequestConfig
	);

	return response.data;
};

export default postUserRegister;
