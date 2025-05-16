import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;


export const DiscountBadge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #dc2626;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 0 0 8px 0;
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
  background-color: #dc2626;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b91c1c;
  }
`;