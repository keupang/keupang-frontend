import SkeletonBox from '@/components/common/SkeletonBox/SkeletonBox';
import {
	Container,
	ProductInfo,
	ThumbnailList,
	TopSection,
} from './ProductDetailSkeleton.styles';

const ProductDetailSkeleton = () => {
	return (
		<Container>
			<TopSection>
				<ThumbnailList>
					{Array.from({ length: 5 }).map((_, i) => (
						<SkeletonBox key={i} width='60px' height='60px' />
					))}
				</ThumbnailList>
				<SkeletonBox width='300px' height='300px' />
				<ProductInfo>
					<SkeletonBox width='200px' height='24px' />
					<SkeletonBox width='120px' height='20px' />
					<SkeletonBox width='180px' height='20px' />
					<SkeletonBox width='150px' height='20px' />
					<SkeletonBox width='120px' height='36px' />
				</ProductInfo>
			</TopSection>
			<br />
			<SkeletonBox width='100%' height='400px' />
		</Container>
	);
};

export default ProductDetailSkeleton;
