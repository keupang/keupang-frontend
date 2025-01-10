import { useErrorBoundary } from 'react-error-boundary';
import postUserRegister, {
	RegisterUserData,
} from '@/apis/user/postUserRegister';
import { useMutation } from '../useMutation';
import { HTTPError } from '@/apis/HTTPError';
import { toast } from 'react-toastify';
import { SuccessType } from '@/types/types';

const useUserRegisterMutation = () => {
	const { showBoundary } = useErrorBoundary();

	const { mutate, isLoading } = useMutation({
		onSuccess: (response: SuccessType<{ name: string }>) => {
			toast.success(`${response.content.detail}`);
		},

		onError: (error) => {
			if (!(error instanceof HTTPError)) {
				showBoundary(error);
			}
		},
	});

	const mutateUserRegister = async (data: RegisterUserData) => {
		return mutate(() => postUserRegister(data));
	};

	return {
		mutateUserRegister,
		isLoading,
	};
};

export default useUserRegisterMutation;
