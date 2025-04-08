import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/stock', ({ request }) => {
		const url = new URL(request.url);
		const page = Number(url.searchParams.get('page') ?? '0');
		const size = Number(url.searchParams.get('size') ?? '10');

		const stocks = Array.from({ length: size }).map((_, i) => ({
			stock: {
				id: i + 1 + page * size,
				productId: 1000 + i,
				saleState: 'ON_SALE',
				price: 1000 + i * 100,
				quantity: 10 + i,
				createdAt: new Date().toISOString(),
				sales: i,
			},
			product: {
				id: 1000 + i,
				name: `상품 ${i + 1 + page * size}`,
				category: 'TEST',
				imageUrl: 'https://via.placeholder.com/150',
			},
		}));

		const totalItems = 100;
		const totalPages = Math.ceil(totalItems / size);

		return HttpResponse.json({
			data: {
				stocks,
				pagination: {
					current_page: page,
					total_items: totalItems,
					total_pages: totalPages,
					hasNext: page < totalPages - 1,
				},
			},
			status: 200,
			code: 20008,
			message: 'SUCCESS_READ_PRODUCT',
			content: { detail: '상품 목록 조회에 성공했습니다.' },
		});
	}),
];
