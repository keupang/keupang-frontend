import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '@/constants/api/apis';
import { CustomAxiosRequestConfig } from '@/types/types';

interface AccessToken {
	accessToken: string;
}

export const getNewToken = async () => {
	const { data } = await axiosInstance.get<AccessToken>(END_POINTS.NEWTOKEN, {
		authRequired: false,
	} as CustomAxiosRequestConfig);
	return data;
};
