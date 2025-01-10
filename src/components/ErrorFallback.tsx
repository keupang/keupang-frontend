import { FallbackProps } from 'react-error-boundary';
import { HTTPError } from '../apis/HTTPError';
import { HTTP_STATUS_CODE } from '../constants/apis';
import Error from './Error';
import { useNavigation } from '../hooks/useNavigation';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	const { goToHome } = useNavigation();

	const handleServerError = () => {
		resetErrorBoundary();
		goToHome();
	};

	if (error instanceof HTTPError) {
		if (error.status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
			return <Error errorCode={error.status} resetError={handleServerError} />;
		}

		return <Error errorCode={error.status} resetError={resetErrorBoundary} />;
	}

	return <Error errorCode={0} resetError={resetErrorBoundary} />;
};
