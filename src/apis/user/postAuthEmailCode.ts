import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';

const postAuthEmailCode = async (email: string, code: string) => {
	const response = await axiosInstance.post(
		`${END_POINTS.AUTHMAILVERIFICATION}`,
		null,
		{
			params: { email, code },
			authRequired: false,
		}
	);

	return response.data;
};

export default postAuthEmailCode;
