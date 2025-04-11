import React from 'react';
import { BuyButton, Category, Container, DiscountBadge, Header, Image, Name, NewPrice, OldPrice, Price, ProductCard, ProductList, Title, ViewMore } from './styleDiscountedProducts';
import products from './DiscountedProductslist';




export default function DiscountedProducts() {
  return (
    <Container>
      <Header>
        <Title>🔹SẢN PHẨM GIẢM GIÁ</Title>
        <ViewMore>Xem thêm →</ViewMore>
      </Header>
      <ProductList>
        {products.discountedProducts.map((product) => (
          <ProductCard key={product.id}>
            <DiscountBadge>-{product.discount}%</DiscountBadge>
            <Image src={product.image} alt={product.name} />
            <Category>{product.category}</Category>
            <Name>{product.name}</Name>
            <Price>
              <OldPrice>{product.priceOld}</OldPrice>
              <NewPrice>{product.priceNew}</NewPrice>
            </Price>
            <BuyButton>MUA NGAY</BuyButton>
          </ProductCard>
        ))}
      </ProductList>
      <Header>
        <Title>🔹SẢN PHẨM KHUYẾN MÃI</Title>
        <ViewMore>Xem thêm →</ViewMore>
      </Header>
      <ProductList>
        {products.promotionalProducts.map((product) => (
          <ProductCard key={product.id}>
            <DiscountBadge>-{product.discount}%</DiscountBadge>
            <Image src={product.image} alt={product.name} />
            <Category>{product.category}</Category>
            <Name>{product.name}</Name>
            <Price>
              <OldPrice>{product.priceOld}</OldPrice>
              <NewPrice>{product.priceNew}</NewPrice>
            </Price>
            <BuyButton>MUA NGAY</BuyButton>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
    
  );
}
