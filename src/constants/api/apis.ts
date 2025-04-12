export const AUTH_ERROR_CODE = {
	INVALID_VERIFY_TOKEN: 40101,
	INVALID_EMAIL_OR_PASSWORD: 40102,
	UNAUTHORIZED_OR_EXPIRED_VERIFY_TOKEN: 40103,
	DUPLICATED_USER_EMAIL: 40104,
	INVALID_OAUTH_PROVIDER: 40105,
	INVALID_AUTHORIZATION_CODE: 40106,
	SOCIAL_EMAIL_ALREADY_REGISTERED: 40107,
	FORBIDDEN_ACCESS_TOKEN: 40181,
	EMPTY_ACCESS_TOKEN: 40182,
	EXPIRED_ACCESS_TOKEN: 40183,
	MALFORMED_TOKEN: 40184,
	TAMPERED_TOKEN: 40185,
	UNSUPPORTED_JWT_TOKEN: 40186,
	TAKEN_AWAY_TOKEN: 40187,
	EXPIRED_REFRESH_TOKEN: 40188,
} as const;

export const HTTP_STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
} as const;

export const NETWORK_TIMEOUT = 100_000;

type ErrorMessage = {
	HEADING: string;
	BODY: {
		firstLine: string;
		secondLine: string;
		thirdLine: string;
	};
	BUTTON: string;
};

export const HTTP_ERROR_MESSAGE: Record<number, ErrorMessage> & {
	DEFAULT: ErrorMessage;
} = {
	404: {
		HEADING: '길을 잃으셨나요?',
		BODY: {
			firstLine: '페이지를 찾을 수 없습니다',
			secondLine: '존재하지 않는 주소를 입력하셨거나',
			thirdLine: '요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다',
		},
		BUTTON: '홈으로 이동',
	},
	500: {
		HEADING: '앗, 뭔가 문제가 생겼어요..',
		BODY: {
			firstLine: '서비스와 연결할 수 없습니다',
			secondLine: '문제를 해결하기 위해 열심히 노력하고 있습니다',
			thirdLine: '잠시 후 다시 확인해주세요',
		},
		BUTTON: '홈으로 이동',
	},
	DEFAULT: {
		HEADING: '앗, 뭔가 문제가 생겼어요..',
		BODY: {
			firstLine: '일시적인 오류로 현재 요청사항을 처리하는데 실패했습니다',
			secondLine: '잠시 후 다시 한 번 시도해주세요',
			thirdLine:
				'지속적으로 발생할 경우 새로 고침하거나 다른 페이지로 이동해주세요',
		},
		BUTTON: '다시 시도',
	},
};

export const PROD = import.meta.env.VITE_NODE_ENV === 'production';

export const BASE_URL = PROD
	? `${import.meta.env.VITE_BASE_URL}`
	: 'http://localhost:5173';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const END_POINTS = {
	LOGIN: 'user/login',
	NEWTOKEN: 'user/refresh',
	AUTHMAILSEND: 'user/send-verification-email',
	AUTHMAILVERIFICATION: 'user/verify-email',
	AUTHREGISTER: 'user/register',
	GETSTOCK: 'stock',
	GET_DETAIL_PRODUCT: (productId: number | string) => `stock/${productId}`,
} as const;
