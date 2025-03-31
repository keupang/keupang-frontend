import { useEffect, useState } from 'react';
import { Button } from './Button';
import styled from '@emotion/styled';
import { Input } from '@/styles/commonStyles';
import { AiOutlineSearch } from 'react-icons/ai';
import { mediaQuery } from '@/utils/mediaQuery';
import { useNavigation } from '@/hooks/useNavigation';
import useQueryParams from '@/hooks/useQueryParams';

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
