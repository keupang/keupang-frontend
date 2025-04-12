import { Button } from '@/components/common/Button/Button';
import { HTTP_ERROR_MESSAGE } from '@/constants/api/apis';
import ErrorImg from '@/assets/images/ErrorImg.png';
import { Flex, Heading, Text, ImageWrapper } from './Error.styles';

interface ErrorProps {
	errorCode: number;
	resetError: () => void;
}

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
					<Text size='lg' weight='medium'>
						{errorMessage.BODY.firstLine}
					</Text>
					<Text size='lg' weight='medium'>
						{errorMessage.BODY.secondLine}
					</Text>
					<Text size='lg' weight='medium'>
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
