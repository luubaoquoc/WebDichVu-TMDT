import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s ease;
position: relative;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
`;

export const ProductImage = styled.img`
  margin: 0 auto;
  height: 160px;
  object-fit: contain;
`;

export const Brand = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0;
`;

export const Price = styled.div`
  color: #dc2626;
  font-weight: bold;
  font-size: 16px;
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
  color: #9ca3af;
  font-size: 14px;
`;

export const BuyButton = styled.button`
  margin-top: 12px;
  background-color: #003366;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0000FF;
  }
`;