import axios from 'axios';

const apiClient = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const registerUser = async (userData: {
	email: string;
	password: string;
	name: string;
	phone: string;
}) => {
	try {
		const response = await apiClient.post('/users/register', userData);
		return response.data; // 성공적으로 받은 데이터 반환
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message); // 서버에서 받은 에러 메시지 반환
		}
		throw new Error('회원가입 요청 중 문제가 발생했습니다.');
	}
};

export const sendVerificationEmail = async (email: string) => {
	try {
		const response = await apiClient.post('/auth/send-email', { email });
		return response.data; // 성공 메시지 반환
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message);
		}
		throw new Error('이메일 전송 중 문제가 발생했습니다.');
	}
};

// 인증 코드 확인 요청
export const verifyEmailCode = async (code: string) => {
	try {
		const response = await apiClient.post('/auth/verify-code', { code });
		return response.data; // 인증 성공 메시지 반환
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message);
		}
		throw new Error('이메일 인증 중 문제가 발생했습니다.');
	}
};
