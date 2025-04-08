import { Button } from './Button';
import { HTTP_ERROR_MESSAGE } from '../constants/apis';
import ErrorImg from '../assets/images/ErrorImg.png';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { mediaQuery } from '../utils/mediaQuery';

interface ErrorProps {
	errorCode: number;
	resetError: () => void;
}

const Flex = styled.div<{
	direction?: 'row' | 'column';
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around';
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
	gap: string;
	height?: string;
	margin?: string;
}>`
	display: flex;
	flex-direction: ${({ direction = 'row' }) => direction};
	justify-content: ${({ justify = 'flex-start' }) => justify};
	align-items: ${({ align = 'stretch' }) => align};
	gap: ${({ gap }) => `${gap}px`};
	height: ${({ height }) => height};

	${mediaQuery('md')} {
		flex-direction: column;
		gap: 24px;
		margin: ${({ margin }) => margin};
	}
`;

const ImageWrapper = styled.div<{ size?: string }>`
	width: ${({ size = '150px' }) => size};
	height: ${({ size = '150px' }) => size};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 8px;

	img {
		max-width: 100%;
		max-height: 100%;
	}
`;

const Heading = styled.h1<{
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme, size = 'md' }) =>
		size === 'sm'
			? theme.fontSizes.sm
			: size === 'md'
				? theme.fontSizes.md
				: size === 'lg'
					? theme.fontSizes.lg
					: theme.fontSizes.xl};
	color: ${({ theme }) => theme.colors.text};
	font-weight: bold;
`;

const Text = styled.p<{
	size?: 'sm' | 'md' | 'lg';
	weight?: 'normal' | 'medium' | 'bold';
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme, size = 'md' }) =>
		size === 'sm'
			? theme.fontSizes.sm
			: size === 'md'
				? theme.fontSizes.md
				: theme.fontSizes.lg};
	font-weight: ${({ weight = 'normal' }) => weight};
	color: ${({ theme, color = 'secondary' }) => theme.colors[color]};
`;

const Error = ({ errorCode, resetError }: ErrorProps) => {
	const safeErrorCode = typeof errorCode === 'number' ? errorCode : 0;
	const errorMessage =
		HTTP_ERROR_MESSAGE[safeErrorCode] ?? HTTP_ERROR_MESSAGE.DEFAULT;

	return (
		<Flex gap='72' align='center' justify='center' height='70vh'>
			<ImageWrapper>
				<img alt='ErrorImg' src={ErrorImg} />
			</ImageWrapper>
			<Flex direction='column' gap='30' justify='center' margin='20px'>
				<Heading size='lg' color='primary'>
					{errorMessage.HEADING}
				</Heading>
				<Flex direction='column' gap='16'>
					<Text size='lg' weight='medium' color='secondary'>
						{errorMessage.BODY.firstLine}
					</Text>
					<Text size='lg' weight='medium' color='secondary'>
						{errorMessage.BODY.secondLine}
					</Text>
					<Text size='lg' weight='medium' color='secondary'>
						{errorMessage.BODY.thirdLine}
					</Text>
				</Flex>
				<Button variant='primary' size='medium' onClick={resetError}>
					{errorMessage.BUTTON}
				</Button>
			</Flex>
		</Flex>
	);
};

export default Error;
