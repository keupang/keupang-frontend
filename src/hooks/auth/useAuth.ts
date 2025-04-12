import useAuthStore from '../../stores/authStore';

const useAuth = () => {
	const { name, token, isLogin, setAuth, clearAuth } = useAuthStore();

	const login = (name: string, token: string) => {
		setAuth(name, token);
	};

	const logout = () => {
		clearAuth();
	};

	return { name, token, isLogin, login, logout };
};

export default useAuth;
