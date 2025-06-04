import React from 'react';
import { Brand, BuyButton, Card, DiscountBadge, Image, OldPrice, Price, ProductName } from './styledProductCart';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <DiscountBadge>-{product.product_discount}%</DiscountBadge>
            <Image src={`http://localhost:3001${product.product_image}`} alt={product.name} />
            <Brand>{product.product_brand}</Brand>
            <ProductName>{product.product_name}</ProductName>
            <Price>{product.product_price.toLocaleString()}₫</Price>
            {product.oldPrice && (
                <OldPrice>{product.oldPrice.toLocaleString()}₫</OldPrice>
            )}
            <BuyButton>MUA NGAY</BuyButton>
        </Card>
    );
};


export default ProductCard;
