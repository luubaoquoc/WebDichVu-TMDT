import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  color: #003366;
  font-size: 22px;
`;

export const ViewMore = styled.span`
  color: #003366;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
`;

export const ProductList = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  justify-content: space-between;
`;

export const ProductCard = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
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

export const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const Category = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  margin-bottom: 10px;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-right: 5px;
`;

export const NewPrice = styled.span`
  color: red;
  font-weight: bold;
`;

export const BuyButton = styled.button`
  background: #003366;
  color: white;
  padding: 6px 14px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #003366;
  }
`;
