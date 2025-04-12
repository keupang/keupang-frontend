import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

const postAuthEmailCode = async (email: string, code: string) => {
	const response = await axiosInstance.post(
		`${END_POINTS.AUTHMAILVERIFICATION}`,
		null,
		{
			params: { email, code },
			authRequired: false,
		} as CustomAxiosRequestConfig
	);

	return response.data;
};

export default postAuthEmailCode;
