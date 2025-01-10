import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

interface AuthState {
	isLogin: boolean;
	name: string | null;
	token: string | null;
	setAuth: (name: string, token: string) => void;
	clearAuth: () => void;
}

const localStoragePersist: PersistStorage<AuthState> = {
	getItem: (key) => {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	},
	setItem: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	},
	removeItem: (key) => {
		localStorage.removeItem(key);
	},
};

const useAuthStore = create(
	persist<AuthState>(
		(set) => ({
			isLogin: false,
			name: null,
			token: null,
			setAuth: (name, token) => set({ name, token, isLogin: true }),
			clearAuth: () => set({ name: null, token: null, isLogin: false }),
		}),
		{
			name: 'auth-storage',
			storage: localStoragePersist,
		}
	)
);

export default useAuthStore;
