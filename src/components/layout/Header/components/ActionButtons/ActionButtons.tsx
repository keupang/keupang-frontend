import React from 'react';
import { Button } from '@/components/common/Button/Button';
import { useTheme } from '@/contexts/theme/ThemeContext';
import { useNavigation } from '@/hooks/useNavigation';
import useAuth from '@/hooks/auth/useAuth';
import {
	ActionButtonsContainer,
	InlineBlockText,
	ResponsiveText,
} from './ActionButtons.styles';

interface ActionButtonsProps {
	isMobile: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ isMobile }) => {
	const { isDarkMode, toggleTheme } = useTheme();
	const { goToSignup, goToLogin } = useNavigation();
	const { isLogin, name, logout } = useAuth();

	return (
		<ActionButtonsContainer>
			{isLogin ? (
				<>
					<InlineBlockText>
						{name}님 <ResponsiveText>안녕하세요.</ResponsiveText>
					</InlineBlockText>
					<Button variant='secondary' size='small' onClick={logout}>
						로그아웃
					</Button>
				</>
			) : (
				<>
					<Button
						variant='secondary'
						size='small'
						onClick={goToLogin}
						withBorder>
						로그인
					</Button>
					<Button variant='primary' size='medium' onClick={goToSignup}>
						회원가입
					</Button>
				</>
			)}

			<Button variant='secondary' size='small' onClick={toggleTheme}>
				{!isMobile && <span>{isDarkMode ? '라이트 모드' : '다크 모드'}</span>}
				{isDarkMode ? '🌞' : '🌛'}
			</Button>
		</ActionButtonsContainer>
	);
};
