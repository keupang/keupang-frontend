import { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '@/hooks/products/useProductDetail';
import { mediaQuery } from '@/utils/mediaQuery';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/Button';
import { toast } from 'react-toastify';
import { clampQuantity, parseQuantityInput } from '@/utils/quantity';
import { MIN_QUANTITY, MAX_QUANTITY } from '@/constants/quantity';
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

const ProductDetailPage = () => {
	const { id } = useParams();
	const productId = Number(id);
	const { data, isLoading } = useProductDetail(productId);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [quantity, setQuantity] = useState<number>(1);

	if (isLoading)
		return <ProductDetailPageContainer>로딩 중...</ProductDetailPageContainer>;

	const stock = data?.data?.stock;

	if (!stock) {
		return (
			<ProductDetailPageContainer>
				상품 정보를 불러올 수 없습니다.
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
		<ProductDetailPageContainer>
			<SearchBar />
			<ProductTopSection>
				<ThumbnailList>
					{stock.detailImages.slice(0, 5).map((src, idx) => (
						<Thumbnail
							key={idx}
							src={src}
							alt={`썸네일 ${idx + 1}`}
							onClick={() => setSelectedImage(src)} // 클릭 시 메인 이미지 변경
						/>
					))}
				</ThumbnailList>

				<MainImage
					src={selectedImage || stock.productImage} // 선택 이미지가 있으면 사용
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
						<Button size='medium' variant='secondary' onClick={handlePurchase}>
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
	);
};

export default ProductDetailPage;
