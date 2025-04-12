import styled from '@emotion/styled';
import { searchFilter } from '../../../constants/product/search';
import useQueryParams from '@/hooks/useQueryParams';
import { mediaQuery } from '../../../utils/dom/mediaQuery';
import { useEffect } from 'react';

interface ProductFilterBarProps {}

const ProductFilterBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 16px;
	gap: ${({ theme }) => theme.spacing.lg};
	background-color: ${({ theme }) => theme.colors.secondary};
	color: #fff;
	border-radius: 10px;
	width: 80%;

	${mediaQuery('sm')} {
		flex-wrap: nowrap;
		white-space: nowrap;
		scrollbar-width: auto;
		overflow-x: auto;
		width: 100%;

		&::-webkit-scrollbar {
			height: 2px;
			background: ${({ theme }) => theme.colors.secondary};
		}

		&::-webkit-scrollbar-thumb {
			background: ${({ theme }) => theme.colors.primary};
			border-radius: 4px;
		}
	}
`;

const FilterItem = styled.button<{ selected: boolean }>`
	cursor: pointer;
	color: ${({ selected, theme }) =>
		selected ? theme.colors.primary : 'inherit'};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const ProductFilterBar: React.FC<ProductFilterBarProps> = () => {
	const { getQuery, setQuery } = useQueryParams();
	const filterQuery = getQuery('sortBy') ?? '';

	useEffect(() => {
		if (!filterQuery) {
			setQuery('sortBy', 'new');
		}
	}, [filterQuery, setQuery]);

	return (
		<ProductFilterBarContainer>
			{Object.entries(searchFilter).map(([label, value]) => (
				<FilterItem
					key={label}
					onClick={() => setQuery('sortBy', value)}
					selected={filterQuery === value}>
					{label}
				</FilterItem>
			))}
		</ProductFilterBarContainer>
	);
};

export default ProductFilterBar;
