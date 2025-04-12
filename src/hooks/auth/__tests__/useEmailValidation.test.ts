import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import { useEmailValidation } from '../useEmailValidation';
import { validateEmail } from '@/utils/validation/validation';

vi.mock('@/utils/validation/validation', () => ({
	validateEmail: vi.fn(),
}));

describe('useEmailValidation > ', () => {
	it('초기 상태가 올바르게 설정되어야 함', () => {
		const { result } = renderHook(() => useEmailValidation('', '', '', false));
		expect(result.current.isEmailValid).toBe(false);
		expect(result.current.email).toBe('');
	});

	it('일반 도메인 사용 시 이메일 유효성을 확인해야 함', () => {
		vi.mocked(validateEmail).mockReturnValueOnce(true);

		const { result, rerender } = renderHook(
			({ emailLocal, emailDomain }) =>
				useEmailValidation(emailLocal, emailDomain, '', false),
			{
				initialProps: {
					emailLocal: 'test',
					emailDomain: 'example.com',
				},
			}
		);

		rerender({ emailLocal: 'test', emailDomain: 'example.com' });

		expect(result.current.isEmailValid).toBe(true);
		expect(result.current.email).toBe('test@example.com');
		expect(validateEmail).toHaveBeenCalledWith('test', 'example.com');
	});

	it('Custom 도메인 사용 시 이메일 유효성을 확인해야 함', () => {
		vi.mocked(validateEmail).mockReturnValueOnce(true);

		const { result, rerender } = renderHook(
			({ emailLocal, customEmailDomain }) =>
				useEmailValidation(emailLocal, '', customEmailDomain, true),
			{
				initialProps: {
					emailLocal: 'customuser',
					customEmailDomain: 'customdomain.com',
				},
			}
		);

		rerender({
			emailLocal: 'customuser',
			customEmailDomain: 'customdomain.com',
		});

		expect(result.current.isEmailValid).toBe(true);
		expect(result.current.email).toBe('customuser@customdomain.com');
		expect(validateEmail).toHaveBeenCalledWith(
			'customuser',
			'customdomain.com'
		);
	});

	it('잘못된 이메일일 경우 isEmailValid가 false로 설정되어야 함', () => {
		vi.mocked(validateEmail).mockReturnValueOnce(false);

		const { result } = renderHook(() =>
			useEmailValidation('invaliduser', 'example', '', false)
		);

		expect(result.current.isEmailValid).toBe(false);
		expect(result.current.email).toBe('invaliduser@example');
		expect(validateEmail).toHaveBeenCalledWith('invaliduser', 'example');
	});
});
