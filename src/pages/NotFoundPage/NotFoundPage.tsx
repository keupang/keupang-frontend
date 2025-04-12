import { Helmet } from 'react-helmet-async';
import Error from '@/components/shared/Error';
import { HTTP_STATUS_CODE } from '@/constants/api/apis';
import { useNavigation } from '@/hooks/useNavigation';

const NotFoundPage = () => {
	const { goToHome } = useNavigation();

	return (
		<>
			<Helmet>
				<title>페이지를 찾을 수 없습니다 | 규팡</title>
				<meta name='robots' content='noindex' />
			</Helmet>
			<Error
				errorCode={HTTP_STATUS_CODE.NOT_FOUND}
				resetError={() => goToHome()}
			/>
		</>
	);
};

export default NotFoundPage;
