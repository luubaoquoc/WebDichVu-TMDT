import styled, { createGlobalStyle } from "styled-components";
import { Col } from "antd";

export const CartDividerHide = createGlobalStyle`
  @media (max-width: 991.98px) {
    .cart-divider {
      display: none !important;
    }
  }
`;

export const PageContainer = styled.div`
  padding: 20px 150px;
  @media (max-width: 1170.98px) {
    padding: 10px 50px;
  }
  @media (max-width: 767.98px) {
    padding: 10px 30px;
  }
`;

export const CartEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartEmptyNotify = styled.p`
  font-size: 18px;
  color: #555;
`;

export const SummaryBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  padding: 20px 24px 20px 24px;
  @media (max-width: 578px) {
    min-width: 450px;
  }
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CustomColHead = styled(Col)`
  height: 50px;
  padding: 10px 8px;
  color: #777;
  font-weight: 700;
  font-size: 1.7rem;
  border-bottom: 2px solid #eee;
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 6px;
  background: #f3f3f3;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  color: #334862;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 8px;
`;

export const ProductSubTotal = styled.div`
  display: none;
  align-items: center;
  gap: 3px;
  @media (max-width: 768px) {
    &.hide-mobile {
      display: flex !important;
    }
  }
`;

export const ProductQuantity = styled.span`
  color: #334862;
  font-weight: 400;
`;

export const ProductPrice = styled.div`
  font-weight: 700;
  text-align: center;
  color: #222;
  font-size: 1.5rem;
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: #fff;
  color: #222;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

export const QuantityInput = styled.input`
  width: 40px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const ProductTotal = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  text-align: right;
`;

export const SummaryTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 18px;
  color: #222;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 15px;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  margin: 18px 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: #003366;
  color: #fff;
  border: none;
  padding: 14px 0;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 18px;
  transition: background 0.2s;
  &:hover {
    background: #b85c2e;
  }
`;

export const CouponBox = styled.div`
  * {
    box-sizing: border-box;
  }
  margin-top: 18px;
  width: 100%;
`;

export const CouponTitle = styled.h2`
  margin-top: 18px;
`;

export const CouponInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const ApplyCouponButton = styled.button`
  width: 100%;
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #222;
  }
`;
