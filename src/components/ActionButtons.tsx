import { Button } from './Button';
import { useTheme } from '../contexts/ThemeContext';
import { mediaQuery } from '../utils/utils';
import styled from '@emotion/styled';
import { useNavigation } from '../hooks/useNavigation';

const ActionButtonsContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing.md};

	${mediaQuery('md')} {
		justify-content: center;
	}
`;

interface ActionButtonsProps {
	isMobile: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ isMobile }) => {
	const { isDarkMode, toggleTheme } = useTheme();
	const { goToSignup } = useNavigation();

	return (
		<ActionButtonsContainer>
			<Button variant='secondary' size='small' withBorder>
				로그인
			</Button>
			<Button variant='primary' size='medium' onClick={goToSignup}>
				회원가입
			</Button>
			<Button variant='secondary' size='small' onClick={toggleTheme}>
				{!isMobile && <span>{isDarkMode ? '라이트 모드' : '다크 모드'}</span>}
				{isDarkMode ? '🌞' : '🌛'}
			</Button>
		</ActionButtonsContainer>
	);
};
