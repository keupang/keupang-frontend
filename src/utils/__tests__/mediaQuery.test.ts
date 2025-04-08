import { lightTheme } from './../../styles/theme';
import { mediaQuery } from './../mediaQuery';
import { describe, it, expect } from 'vitest';

describe('mediaQuery > ', () => {
	const mockTheme = lightTheme;

	it('올바른 media query 문자열을 생성해야 한다.', () => {
		const smMediaQuery = mediaQuery('sm')({ theme: mockTheme });
		const mdMediaQuery = mediaQuery('md')({ theme: mockTheme });
		const lgMediaQuery = mediaQuery('lg')({ theme: mockTheme });

		expect(smMediaQuery.trim()).toBe('@media (max-width: 480px)');
		expect(mdMediaQuery.trim()).toBe('@media (max-width: 768px)');
		expect(lgMediaQuery.trim()).toBe('@media (max-width: 1024px)');
	});

	it('존재하지 않는 breakpoint를 사용했을 때 오류를 발생시키지 않아야 한다.', () => {
		const invalidBreakpoint = () =>
			mediaQuery('unknown' as keyof typeof mockTheme.breakpoints)({
				theme: mockTheme,
			});

		expect(invalidBreakpoint).not.toThrow();
		expect(invalidBreakpoint().trim()).toBe('@media (max-width: unknown)');
	});
});
