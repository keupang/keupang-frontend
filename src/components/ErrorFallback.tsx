import { FallbackProps } from 'react-error-boundary';
import { HTTPError } from '../apis/HTTPError';
import Error from './Error';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	const errorCode =
		error instanceof HTTPError && typeof error.status === 'number'
			? error.status
			: 0;

	return <Error errorCode={errorCode} resetError={resetErrorBoundary} />;
};
