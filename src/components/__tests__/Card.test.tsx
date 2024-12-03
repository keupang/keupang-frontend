import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Card } from '../Card';
import { lightTheme } from '../../styles/theme';
import { describe, it, expect } from 'vitest';

describe('Card 컴포넌트', () => {
	it('헤더, 콘텐츠, 푸터가 올바르게 렌더링된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Card
					header='카드 헤더'
					content='카드 내용입니다.'
					footer='카드 푸터'
				/>
			</ThemeProvider>
		);

		// 헤더, 콘텐츠, 푸터가 정상적으로 렌더링되는지 확인
		expect(screen.getByText('카드 헤더')).toBeInTheDocument();
		expect(screen.getByText('카드 내용입니다.')).toBeInTheDocument();
		expect(screen.getByText('카드 푸터')).toBeInTheDocument();
	});

	it('variant 속성에 따라 스타일이 올바르게 적용된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Card header='헤더' content='내용' footer='푸터' variant='outlined' />
			</ThemeProvider>
		);

		const cardContainer = screen.getByTestId('card-container');
		const computedStyle = window.getComputedStyle(cardContainer);
		expect(computedStyle.border).toBe(
			`1px solid ${lightTheme.colors.secondary}`
		);
	});

	it('헤더가 없을 때 헤더 섹션이 렌더링되지 않는다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Card content='헤더 없는 카드' footer='푸터만 있음' />
			</ThemeProvider>
		);

		// 헤더가 렌더링되지 않음을 확인
		expect(screen.queryByText('헤더 없는 카드')).toBeInTheDocument();
		expect(screen.queryByText('카드 헤더')).not.toBeInTheDocument();
	});

	it('푸터가 없을 때 푸터 섹션이 렌더링되지 않는다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Card header='푸터 없음' content='내용만 있음' />
			</ThemeProvider>
		);

		// 푸터가 렌더링되지 않음을 확인
		expect(screen.queryByText('푸터 없음')).toBeInTheDocument();
		expect(screen.queryByText('카드 푸터')).not.toBeInTheDocument();
	});

	it('children으로 전달된 React 요소가 올바르게 렌더링된다', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Card
					header={<h1>React 헤더</h1>}
					content={<p>React 내용</p>}
					footer={<button>React 버튼</button>}
				/>
			</ThemeProvider>
		);

		// React 요소들이 올바르게 렌더링되었는지 확인
		expect(
			screen.getByRole('heading', { name: 'React 헤더' })
		).toBeInTheDocument();
		expect(screen.getByText('React 내용')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'React 버튼' })
		).toBeInTheDocument();
	});
});
