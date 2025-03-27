import { create } from 'zustand';
import { searchDefault } from '@/constants/search';

interface SearchState {
	query: string;
	page: string;
	size: string;
	category: string;
	results: any[];

	setQuery: (query: string) => void;
	setPage: (page: string) => void;
	setSize: (size: string) => void;
	setCategory: (category: string) => void;
	setResults: (results: any[]) => void;
	reset: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
	...searchDefault,
	results: [],

	setQuery: (query) => set({ query }),
	setPage: (page) => set({ page }),
	setSize: (size) => set({ size }),
	setCategory: (category) => set({ category }),
	setResults: (results) => set({ results }),

	reset: () =>
		set({
			...searchDefault,
			results: [],
		}),
}));

export default useSearchStore;
