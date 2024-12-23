import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import GlobalErrorBoundary from '../GlobalErrorBoundary';
import { HTTPError } from '../../apis/HTTPError';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

vi.mock('@tanstack/react-query', () => ({
	useQueryErrorResetBoundary: vi.fn(),
}));

vi.mock('../ErrorFallBack', () => ({
	ErrorFallback: ({ error, resetErrorBoundary }: any) => {
		console.log('Rendering ErrorFallback with error:', error.message);
		return (
			<div>
				<p>Error: {error.message}</p>
				<button
					onClick={() => {
						resetErrorBoundary();
					}}>
					Retry
				</button>
			</div>
		);
	},
}));

describe('GlobalErrorBoundary > ', () => {
	const ThrowError = ({ error }: { error: Error }) => {
		throw error;
	};

	beforeEach(() => {
		vi.mocked(useQueryErrorResetBoundary).mockReturnValue({
			reset: vi.fn(),
			clearReset: vi.fn(),
			isReset: vi.fn(() => true),
		});
	});

	it('HTTPError를 로깅해야 한다.', () => {
		const logSpy = vi.spyOn(console, 'groupCollapsed');
		const error = new HTTPError(
			404,
			40401,
			{ detail: 'The requested resource could not be found.' },
			'Resource not found'
		);

		render(
			<GlobalErrorBoundary>
				<ThrowError error={error} />
			</GlobalErrorBoundary>
		);

		expect(logSpy).toHaveBeenCalledWith(`HTTPError: 404 Resource not found`);
		expect(screen.getByText('Error: Resource not found')).toBeInTheDocument();

		logSpy.mockRestore();
	});

	it('일반 Error를 로깅해야 한다.', () => {
		const logSpy = vi.spyOn(console, 'error');
		const error = new Error('Something went wrong');

		render(
			<GlobalErrorBoundary>
				<ThrowError error={error} />
			</GlobalErrorBoundary>
		);

		expect(logSpy).toHaveBeenCalledWith(error);
		expect(screen.getByText('Error: Something went wrong')).toBeInTheDocument();

		logSpy.mockRestore();
	});
});
