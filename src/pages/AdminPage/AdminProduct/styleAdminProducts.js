// src/pages/AdminPage/AdminProducts/styleAdminProducts.js
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin-top: 60px; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const CreateButton = styled.button`
  padding: 8px 16px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #27ae60;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #4e73df;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 24px;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  background: #4e73df;
  color: white;
`;


export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
`;

export const Td = styled.td`
  padding: 12px;
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  background-color: ${props => props.danger ? "#e74c3c" : "#3498db"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
