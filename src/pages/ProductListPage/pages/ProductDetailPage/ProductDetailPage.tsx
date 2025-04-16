import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '@/hooks/products/useProductDetail';
import SearchBar from '@/components/shared/SearchBar/SearchBar';
import { Button } from '@/components/common/Button/Button';
import { toast } from 'react-toastify';
import { clampQuantity, parseQuantityInput } from '@/utils/quantity/quantity';
import { MIN_QUANTITY, MAX_QUANTITY } from '@/constants/product/quantity';
import {
	ProductDetailPageContainer,
	ProductTopSection,
	MainImage,
	ThumbnailList,
	Thumbnail,
	ProductInfo,
	ProductTitle,
	ProductPrice,
	ProductCategory,
	ActionButtons,
	DetailImageSection,
	DetailImage,
	QuantityInput,
} from './ProductDetailPage.styles';
import SeoHelmet from '@/components/shared/SeoHelmet/SeoHelmet';
import ProductDetailSkeleton from './components/ProductDetailSkeleton';
import Empty from '@/components/shared/EmptyModal/components/Empty/Empty';

const ProductDetailPage = () => {
	const { id } = useParams();
	const productId = Number(id);
	const { data, isError, isLoading } = useProductDetail(productId);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [quantity, setQuantity] = useState<number>(1);

	if (isLoading) return <ProductDetailSkeleton />;

	const stock = data?.data?.stock;

	if (isLoading) return <ProductDetailSkeleton />;
	if (isError) throw new Error('상품 정보를 불러오는 중 오류 발생');
	if (!stock) {
		return (
			<ProductDetailPageContainer>
				<Empty
					title='상품 정보가 존재하지 않습니다'
					description='상품이 삭제되었거나 잘못된 경로로 접근했을 수 있어요.'
				/>
			</ProductDetailPageContainer>
		);
	}

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		parseQuantityInput(e, setQuantity);

	const handleQuantityBlur = () => setQuantity((q) => clampQuantity(q));
	const handleAddToCart = () => {
		toast.info('장바구니 기능은 준비중인 기능입니다!');
	};

	const handlePurchase = () => {
		toast.info('구매하기 기능은 준비중인 기능입니다!');
	};

	return (
		<>
			<SeoHelmet
				title={`${stock.productName} | 규팡`}
				description={`${stock.productName} 상품 상세정보. 가격: ${stock.price.toLocaleString()}원`}
				url={`https://keupang.store/product/${stock.productId}`}
				image={stock.productImage}
			/>
			<ProductDetailPageContainer>
				<SearchBar />
				<ProductTopSection>
					<ThumbnailList>
						{stock.detailImages.slice(0, 5).map((src, idx) => (
							<Thumbnail
								key={idx}
								src={src}
								alt={`썸네일 ${idx + 1}`}
								onClick={() => setSelectedImage(src)}
							/>
						))}
					</ThumbnailList>

					<MainImage
						src={selectedImage || stock.productImage}
						alt={stock.productName}
					/>
					<ProductInfo>
						<ProductTitle>{stock.productName}</ProductTitle>
						<hr />
						<ProductPrice>{stock.price.toLocaleString()}원</ProductPrice>
						<ProductCategory>카테고리: {stock.category}</ProductCategory>
						<div>남은 수량: {stock.quantity}개</div>
						<ActionButtons>
							<QuantityInput
								type='number'
								min={MIN_QUANTITY}
								max={MAX_QUANTITY}
								value={quantity}
								onChange={handleQuantityChange}
								onBlur={handleQuantityBlur}
							/>
							<Button size='medium' variant='primary' onClick={handleAddToCart}>
								장바구니
							</Button>
							<Button
								size='medium'
								variant='secondary'
								onClick={handlePurchase}>
								구매하기
							</Button>
						</ActionButtons>
					</ProductInfo>
				</ProductTopSection>
				<hr />
				<br />
				<DetailImageSection>
					{stock.detailImages.map((src, idx) => (
						<DetailImage key={idx} src={src} alt={`상세 이미지 ${idx + 1}`} />
					))}
				</DetailImageSection>
			</ProductDetailPageContainer>
		</>
	);
};

export default ProductDetailPage;
