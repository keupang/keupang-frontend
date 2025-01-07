import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';

const postAuthMail = async (email: string) => {
	const response = await axiosInstance.post(
		`${END_POINTS.AUTHMAILSEND}`,
		null,
		{
			params: { email },
			authRequired: false,
		}
	);

	return response.data;
};

export default postAuthMail;
