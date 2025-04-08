import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@emotion/react';
import { Button } from '../Button';
import { lightTheme } from '../../styles/theme';
import { describe, expect, it, vi } from 'vitest';

describe('버튼 컴포넌트 테스트 > ', () => {
	it('올바른 텍스트로 버튼이 렌더링된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Button>클릭하세요</Button>
			</ThemeProvider>
		);

		// 버튼이 렌더링되었는지 확인
		expect(
			screen.getByRole('button', { name: '클릭하세요' })
		).toBeInTheDocument();
	});

	it('variant 속성에 따라 올바른 스타일이 적용된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Button variant='danger'>위험 버튼</Button>
			</ThemeProvider>
		);

		// Danger 스타일 확인
		const button = screen.getByRole('button', { name: '위험 버튼' });
		expect(button).toHaveStyle(`background-color: ${lightTheme.colors.danger}`);
	});

	it('size 속성에 따라 올바른 크기가 적용된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Button size='large'>큰 버튼</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button', { name: '큰 버튼' });
		const computedStyles = window.getComputedStyle(button);

		const expectedPadding = `${parseFloat(lightTheme.spacing.sm) * 1.2}px ${parseFloat(lightTheme.spacing.lg) * 1.5}px`;
		expect(computedStyles.padding).toBe(expectedPadding);
	});

	it('버튼 클릭 시 onClick 핸들러가 호출된다', async () => {
		const onClickMock = vi.fn();
		render(
			<ThemeProvider theme={lightTheme}>
				<Button onClick={onClickMock}>클릭하세요</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button', { name: '클릭하세요' });
		await userEvent.click(button);

		// 클릭 이벤트가 호출되었는지 확인
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	it('disabled 속성이 true일 때 버튼이 비활성화된다', async () => {
		const onClickMock = vi.fn();
		render(
			<ThemeProvider theme={lightTheme}>
				<Button disabled onClick={onClickMock}>
					비활성화된 버튼
				</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button', { name: '비활성화된 버튼' });

		// Disabled 상태 확인
		expect(button).toBeDisabled();

		// 클릭 이벤트가 호출되지 않아야 함
		expect(onClickMock).not.toHaveBeenCalled();
	});
});
