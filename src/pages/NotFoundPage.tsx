import Error from '../components/Error';
import { HTTP_STATUS_CODE } from '../constants/apis';
import { useNavigation } from '../hooks/useNavigation';

const NotFoundPage = () => {
	const { goToHome } = useNavigation();

	return (
		<Error
			errorCode={HTTP_STATUS_CODE.NOT_FOUND}
			resetError={() => goToHome()}
		/>
	);
};

export default NotFoundPage;
