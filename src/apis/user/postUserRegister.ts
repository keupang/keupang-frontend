import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/apis';

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
		}
	);

	return response.data;
};

export default postUserRegister;
