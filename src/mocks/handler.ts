// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
interface BodyType {
	email: string;
	password: string;
	name: string;
	phone: string;
	code: string;
}

let verificationCode: string | null = null;

export const handler = [
	http.get('/api/products', () => {
		return HttpResponse.json([
			{ id: 1, name: 'Product A', price: 100 },
			{ id: 2, name: 'Product B', price: 200 },
		]);
	}),

	http.post('/api/users/register', async ({ request }) => {
		const body = (await request.json()) as BodyType;

		if (!body.email || !body.password || !body.name || !body.phone) {
			return HttpResponse.json(
				{ message: '필수 필드가 누락되었습니다.' },
				{ status: 400 }
			);
		}

		return HttpResponse.json(
			{
				message: '회원가입 성공!',
				data: {
					id: Math.floor(Math.random() * 1000),
					email: body.email,
					name: body.name,
				},
			},
			{ status: 201 }
		);
	}),

	http.post('/api/auth/send-email', async ({ request }) => {
		const { email } = (await request.json()) as BodyType;

		verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6자리 랜덤 숫자

		console.log(`발송한 이메일 주소 ${email}`);
		console.log(`생성된 인증코드 ${verificationCode}`);

		return HttpResponse.json(
			{ message: '인증 이메일이 전송되었습니다.' },
			{ status: 200 }
		);
	}),

	http.post('/api/auth/verify-code', async ({ request }) => {
		const { code } = (await request.json()) as BodyType;
		if (!code) {
			return HttpResponse.json(
				{ message: '인증 코드를 입력해주세요.' },
				{ status: 400 }
			);
		}
		if (code !== verificationCode) {
			return HttpResponse.json(
				{ message: '인증 코드가 유효하지 않습니다.' },
				{ status: 401 }
			);
		}
		return HttpResponse.json(
			{ message: '이메일 인증에 성공했습니다!' },
			{ status: 200 }
		);
	}),
];
