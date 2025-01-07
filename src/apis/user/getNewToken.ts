import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';

interface AccessToken {
	accessToken: string;
}

export const getNewToken = async () => {
	const { data } = await axiosInstance.get<AccessToken>(END_POINTS.NEWTOKEN, {
		authRequired: false,
	});
	return data;
};
