import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigation } from '@/hooks/useNavigation';
import useQueryParams from '@/hooks/useQueryParams';
import {
	SearchBarContainer,
	InputContainer,
	SearchInput,
	SearchIcon,
	SearchButton,
} from './SearchBar.styles';

const SearchBar = () => {
	const [input, setInput] = useState('');
	const { goToSearch } = useNavigation();
	const { getQuery } = useQueryParams();
	const search = getQuery('search');

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const handleSearch = () => {
		if (!input.trim()) return;
		goToSearch(input.trim());
	};

	useEffect(() => {
		setInput(search ?? '');
	}, [search]);

	return (
		<SearchBarContainer>
			<InputContainer>
				<SearchInput
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='       Search...'
					onKeyDown={handleKeyDown}
				/>
				<SearchIcon>
					<AiOutlineSearch color='#ccc' />
				</SearchIcon>
			</InputContainer>

			<SearchButton
				variant='primary'
				size='small'
				withBorder={false}
				type='submit'
				onClick={handleSearch}>
				Search
			</SearchButton>
		</SearchBarContainer>
	);
};

export default SearchBar;
