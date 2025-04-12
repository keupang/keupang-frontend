import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomThemeProvider } from '../ThemeContext';
import { useTheme } from '../ThemeContext';
import { describe, expect, it, vi } from 'vitest';

// 테스트를 위한 목업 컴포넌트
const TestComponent = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<div>
			<p>현재 테마: {isDarkMode ? '다크 모드' : '라이트 모드'}</p>
			<button onClick={toggleTheme}>테마 전환</button>
		</div>
	);
};

describe('CustomThemeProvider 테스트 > ', () => {
	it('localStorage에 저장된 값에 따라 초기 테마를 설정해야 한다.', () => {
		localStorage.setItem('theme', JSON.stringify(true)); // 다크 모드 설정

		render(
			<CustomThemeProvider>
				<TestComponent />
			</CustomThemeProvider>
		);

		// 다크 모드가 초기 상태인지 확인
		const textElement = screen.getByText(/현재 테마: 다크 모드/i);
		expect(textElement).toBeInTheDocument();
	});

	it('테마 전환 버튼을 클릭하여 테마를 전환해야 한다.', async () => {
		localStorage.setItem('theme', JSON.stringify(false)); // 라이트 모드로 시작
		const user = userEvent.setup();

		render(
			<CustomThemeProvider>
				<TestComponent />
			</CustomThemeProvider>
		);

		const toggleButton = screen.getByRole('button', { name: /테마 전환/i });

		// 초기 상태 확인
		expect(screen.getByText(/현재 테마: 라이트 모드/i)).toBeInTheDocument();

		// 다크 모드로 전환
		await user.click(toggleButton);
		expect(screen.getByText(/현재 테마: 다크 모드/i)).toBeInTheDocument();

		// 다시 라이트 모드로 전환
		await user.click(toggleButton);
		expect(screen.getByText(/현재 테마: 라이트 모드/i)).toBeInTheDocument();
	});

	it('테마 전환 시 localStorage에 값이 저장되어야 한다.', async () => {
		localStorage.setItem('theme', JSON.stringify(false)); // 초기값: 라이트 모드
		const user = userEvent.setup();

		render(
			<CustomThemeProvider>
				<TestComponent />
			</CustomThemeProvider>
		);

		const toggleButton = screen.getByRole('button', { name: /테마 전환/i });

		// 다크 모드로 전환
		await user.click(toggleButton);
		expect(localStorage.getItem('theme')).toBe('true');

		// 라이트 모드로 전환
		await user.click(toggleButton);
		expect(localStorage.getItem('theme')).toBe('false');
	});

	it('CustomThemeProvider 없이 useTheme 사용 시 오류를 발생시켜야 한다.', () => {
		const consoleErrorSpy = vi
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		const ErrorComponent = () => {
			useTheme(); // ThemeProvider 없이 호출
			return null;
		};

		expect(() => render(<ErrorComponent />)).toThrowError(
			'useTheme은 ThemeProvider와 함께 사용되어야 한다.'
		);

		consoleErrorSpy.mockRestore();
	});
});
