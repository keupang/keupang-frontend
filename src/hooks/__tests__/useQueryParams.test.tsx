import { renderHook } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import useQueryParams from '../useQueryParams';
import { describe, expect, it, vi, beforeEach } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
	const mod = await importOriginal<any>();
	return {
		...mod,
		useNavigate: () => mockNavigate,
	};
});

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<MemoryRouter initialEntries={['/test?filter=electronics']}>
		<Routes>
			<Route path='/test' element={children} />
		</Routes>
	</MemoryRouter>
);

beforeEach(() => {
	mockNavigate.mockClear();
});

describe('useQueryParams > ', () => {
	it('getQuery는 쿼리 문자열에서 원하는 값을 읽을 수 있어야 한다', () => {
		const { result } = renderHook(() => useQueryParams(), { wrapper });
		expect(result.current.getQuery('filter')).toBe('electronics');
	});

	it('setQuery는 쿼리 파라미터를 하나 추가하거나 수정할 수 있어야 한다', () => {
		const { result } = renderHook(() => useQueryParams(), { wrapper });

		result.current.setQuery('category', 'fashion');

		expect(mockNavigate).toHaveBeenCalledWith({
			search: 'filter=electronics&category=fashion',
		});
	});

	it('setMultipleQueries는 여러 쿼리 파라미터를 한 번에 설정할 수 있어야 한다', () => {
		const { result } = renderHook(() => useQueryParams(), { wrapper });

		result.current.setMultipleQueries({ filter: 'daily', category: '의류' });

		expect(mockNavigate).toHaveBeenCalledWith({
			search: 'filter=daily&category=%EC%9D%98%EB%A5%98',
		});
	});

	it('resetQueries는 모든 쿼리 파라미터를 초기화할 수 있어야 한다', () => {
		const { result } = renderHook(() => useQueryParams(), { wrapper });

		result.current.resetQueries();

		expect(mockNavigate).toHaveBeenCalledWith({ search: '' });
	});
});
