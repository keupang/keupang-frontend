import styled from '@emotion/styled';
import { mediaQuery } from '../../utils/mediaQuery';
import { Flex } from '@/styles/commonStyles';

export const LoginFlex = styled(Flex)`
	gap: 20px;
	width: 100%;
	${mediaQuery('md')} {
		flex-direction: column;
	}
`;
