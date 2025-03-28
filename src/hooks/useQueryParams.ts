import { useSearchParams, useNavigate } from 'react-router-dom';

type QueryKey = 'filter' | 'category';

const useQueryParams = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const setQuery = (key: QueryKey, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set(key, value);
		navigate({ search: newParams.toString() });
	};

	const getQuery = (key: QueryKey) => {
		return searchParams.get(key);
	};

	const setMultipleQueries = (updates: Partial<Record<QueryKey, string>>) => {
		const newParams = new URLSearchParams(searchParams.toString());
		Object.entries(updates).forEach(([key, value]) => {
			if (value !== undefined) {
				newParams.set(key, value);
			}
		});
		navigate({ search: newParams.toString() });
	};

	const resetQueries = () => {
		navigate({ search: '' });
	};

	return {
		getQuery,
		setQuery,
		setMultipleQueries,
		resetQueries,
	};
};

export default useQueryParams;
