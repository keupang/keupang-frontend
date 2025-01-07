// src/mocks/handlers.ts
import { http, HttpResponse, passthrough } from 'msw';
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
];
