import React from 'react';
import { Brand, BuyButton, Card, DiscountBadge, ImageWrapper, OldPrice, Price, ProductImage, ProductName } from './styledProductCart';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <ImageWrapper>
                {product.discount && <DiscountBadge>-{product.discount}%</DiscountBadge>}
                <ProductImage
                    src={product.product_image}
                    alt={product.product_name}
                />
            </ImageWrapper>
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
