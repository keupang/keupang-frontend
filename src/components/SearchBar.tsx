import { useState } from 'react';
import useSearchStore from '@/stores/searchStore';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from './Button';
import styled from '@emotion/styled';
import { Input } from '@/styles/commonStyles';
import { AiOutlineSearch } from 'react-icons/ai';
import { mediaQuery } from '@/utils/mediaQuery';
import { getProducts } from '@/apis/products/getProducts';

const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	width: 100%;
`;

const InputContainer = styled.div`
	position: relative;
	width: 80%;
	display: flex;
`;

const SearchInput = styled(Input)`
	width: 98%;
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text};

	${mediaQuery('md')} {
		padding: 0;
	}
`;

const SearchIcon = styled.span`
	position: absolute;
	left: ${({ theme }) => theme.spacing.sm};
	top: ${({ theme }) => theme.spacing.sm};
	pointer-events: none;

	svg {
		width: 20px;
		height: 20px;
	}

	${InputContainer}:focus-within & {
		display: none;
	}

	${mediaQuery('md')} {
		display: none;
	}
`;

const SearchButton = styled(Button)`
	padding: ${({ theme }) => theme.spacing.sm};
`;

const SearchBar = () => {
	const [input, setInput] = useState('');
	const setQuery = useSearchStore((state) => state.setQuery);
	const setResults = useSearchStore((state) => state.setResults);
	const { goToProducts } = useNavigation();

	const handleSearch = async () => {
		try {
			setQuery(input);

			const response = await getProducts({ query: input, page: 1, size: 10 });
			setResults(response.data.products);
			console.log(response.data.products);

			goToProducts();
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

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
				onClick={handleSearch}
				type='submit'>
				Search
			</SearchButton>
		</SearchBarContainer>
	);
};

export default SearchBar;
