import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductList from '../ProductList';
import { expect, test } from 'vitest';

test('renders product list from Mock API', async () => {
	const { findByText } = render(<ProductList />);

	// Mock 데이터 확인
	const productA = await findByText(/Product A: \$100/);
	const productB = await findByText(/Product B: \$200/);

	expect(productA).toBeInTheDocument();
	expect(productB).toBeInTheDocument();
});

test('allows user to click a product item', async () => {
	const { findByText } = render(<ProductList />);

	// Mock 데이터 확인
	const productA = await findByText(/Product A: \$100/);
	expect(productA).toBeInTheDocument();

	// 유저가 Product A를 클릭
	await userEvent.click(productA);

	// 클릭 후 상태 확인 (예: alert, state 업데이트)
	expect(await findByText(/Product A clicked!/)).toBeInTheDocument(); // 예시
});
