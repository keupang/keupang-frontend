import { renderHook } from '@testing-library/react';
import { useNavigation } from '../useNavigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useNavigate, MemoryRouter } from 'react-router-dom';

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal();
	return Object.assign({}, actual, {
		useNavigate: vi.fn(() => vi.fn()),
	});
});

describe('useNavigation > ', () => {
	const mockedUseNavigate = vi.mocked(useNavigate);

	beforeEach(() => {
		mockedUseNavigate.mockClear();
	});

	it('goToSignup 함수는 /signup 경로로 이동시킨다.', () => {
		const mockNavigate = vi.fn();
		mockedUseNavigate.mockReturnValue(mockNavigate);

		const { result } = renderHook(() => useNavigation(), {
			wrapper: MemoryRouter,
		});

		result.current.goToSignup();

		// 반환된 mockNavigate 함수가 '/signup' 경로로 호출되었는지 확인
		expect(mockNavigate).toHaveBeenCalledWith('/signup');
	});
});
