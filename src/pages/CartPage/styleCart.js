import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px 150px;
  margin-top: 150px;
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
`;

export const CartEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartEmptyNotify = styled.p`
  font-size: 18px;
  color: #555;
`;

export const SummaryBox = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  padding: 24px 24px 16px 24px;
  min-width: 320px;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ProductList = styled.div`
  flex: 2;
`;

export const ProductTable = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-collapse: separate;
  border-spacing: 0;
`;

export const Th = styled.th`
  padding: 16px 8px;
  background: #f8f9fa;
  color: #333;
  font-weight: 700;
  font-size: 17px;
  border-bottom: 2px solid #eee;
  text-align: center;
`;

export const Td = styled.td`
  padding: 18px 8px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
  text-align: center;
`;

export const TdInfo = styled(Td)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
  background: #fff;
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 6px;
  background: #f3f3f3;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductName = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  color: #222;
  font-size: 16px;
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
  font-size: 20px;
  font-weight: 600;
  color: #007bff;
  min-width: 90px;
  text-align: right;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  font-size: 22px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: #b52a37;
  }
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
