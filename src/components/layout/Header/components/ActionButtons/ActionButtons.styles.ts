import styled from '@emotion/styled';
import { Text } from '@/styles/commonStyles';
import { mediaQuery } from '@/utils/dom/mediaQuery';

export const ActionButtonsContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing.md};
	align-items: center;

	${mediaQuery('md')} {
		justify-content: center;
	}
`;

export const ResponsiveText = styled(Text)`
	display: inline;

	${mediaQuery('sm')} {
		display: none;
	}
`;

export const InlineBlockText = styled(Text)`
	display: inline-block;
	width: auto;
	white-space: nowrap;
`;
