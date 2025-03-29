import { renderHook } from '@testing-library/react';
import { useNavigation } from '../useNavigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useNavigate, MemoryRouter } from 'react-router-dom';

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = (await importOriginal()) as Record<string, any>;
	return {
		...actual,
		useNavigate: vi.fn(),
	};
});

describe('useNavigation >', () => {
	const mockNavigate = vi.fn();
	const mockedUseNavigate = vi.mocked(useNavigate);

	beforeEach(() => {
		mockNavigate.mockClear();
		mockedUseNavigate.mockReturnValue(mockNavigate);
	});

	const wrapper = ({ children }: { children: React.ReactNode }) => (
		<MemoryRouter>{children}</MemoryRouter>
	);

	it('goToSignup 함수는 "/signup" 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToSignup();
		expect(mockNavigate).toHaveBeenCalledWith('/signup');
	});

	it('goToHome 함수는 "/" 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToHome();
		expect(mockNavigate).toHaveBeenCalledWith('/');
	});

	it('goToLogin 함수는 "/login" 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToLogin();
		expect(mockNavigate).toHaveBeenCalledWith('/login');
	});

	it('goToProductDetail 함수는 "/product/:id" 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToProductDetail(123);
		expect(mockNavigate).toHaveBeenCalledWith('/product/123');
	});

	it('goToCategory 함수는 "/products?category=..." 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToCategory('패션');
		expect(mockNavigate).toHaveBeenCalledWith(
			'/products?category=%ED%8C%A8%EC%85%98'
		);
	});

	it('goToLoginWithReplace 함수는 replace: true 옵션으로 "/login" 경로로 이동시킨다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goToLoginWithReplace();
		expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});

	it('goBack 함수는 이전 페이지로 이동한다.', () => {
		const { result } = renderHook(() => useNavigation(), { wrapper });
		result.current.goBack();
		expect(mockNavigate).toHaveBeenCalledWith(-1);
	});
});
