import styled from '@emotion/styled';
import EmptyImage from '@/assets/images/ErrorImg.png';
import { Theme } from '@emotion/react';
import { mediaQuery } from '../../utils/dom/mediaQuery';

interface EmptyProps {
	title?: string;
	description?: string;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 80px 0;
	width: 100%;
	text-align: center;
	gap: 24px;

	${mediaQuery('md')} {
		padding: 48px 0;
		gap: 20px;
	}
`;

const Image = styled.img`
	width: 160px;
	height: 160px;
	object-fit: contain;

	${mediaQuery('md')} {
		width: 120px;
		height: 120px;
	}
`;

const Title = styled.h2<{
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme, color = 'text' }) => theme.colors[color]};
	font-weight: bold;

	${mediaQuery('md')} {
		font-size: ${({ theme }) => theme.fontSizes.lg};
	}
`;

const Description = styled.p<{
	color?: keyof Theme['colors'];
}>`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme, color = 'secondary' }) => theme.colors[color]};
	line-height: 1.6;

	${mediaQuery('md')} {
		font-size: ${({ theme }) => theme.fontSizes.sm};
	}
`;

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
