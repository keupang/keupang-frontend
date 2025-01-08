// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handler = [
	http.get('/api/products', () => {
		return HttpResponse.json([
			{ id: 1, name: 'Product A', price: 100 },
			{ id: 2, name: 'Product B', price: 200 },
		]);
	}),
];
