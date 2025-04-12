import EmptyImage from '@/assets/images/ErrorImg.png';
import { Wrapper, Image, Title, Description } from './Empty.styles';

interface EmptyProps {
	title?: string;
	description?: string;
}

const Empty = ({
	title = '상품이 없습니다',
	description = '조건을 변경하거나 다른 카테고리를 선택해보세요.',
}: EmptyProps) => {
	return (
		<Wrapper>
			<Image src={EmptyImage} alt='empty' />
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Wrapper>
	);
};

export default Empty;
