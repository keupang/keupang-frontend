import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
	id: number;
	name: string;
	price: number;
}

const ProductList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
	const [clickedMessage, setClickedMessage] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('/api/products');
				setProducts(response.data);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setIsLoading(false); // 데이터 로딩 완료
			}
		};

		fetchProducts();
	}, []);

	const handleClick = (productName: string) => {
		setClickedMessage(`${productName} clicked!`);
	};

	if (isLoading) {
		return <p>Loading...</p>; // 로딩 중 상태 표시
	}

	return (
		<div>
			<h1>Product List</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id} onClick={() => handleClick(product.name)}>
						{product.name}: ${product.price}
					</li>
				))}
			</ul>
			{clickedMessage && <p>{clickedMessage}</p>}
		</div>
	);
};

export default ProductList;
