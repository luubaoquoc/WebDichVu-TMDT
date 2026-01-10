import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 180px auto;
  display: flex;
  gap: 20px;
`;

export const ImageWrapper = styled.div`

`;

export const ProductImage = styled.img`

  width: 400px;
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

export const Brand = styled.p`
  font-size: 18px;
  color: #666;
`;

export const Price = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #e53935;
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
  color: #999;
`;

export const Discount = styled.div`
  font-size: 18px;
  color: green;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.6;
`;

export const BuyButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
