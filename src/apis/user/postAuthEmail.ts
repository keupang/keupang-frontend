import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

const postAuthMail = async (email: string) => {
	const response = await axiosInstance.post(
		`${END_POINTS.AUTHMAILSEND}`,
		null,
		{
			params: { email },
			authRequired: false,
		} as CustomAxiosRequestConfig
	);

	return response.data;
};

export default postAuthMail;
