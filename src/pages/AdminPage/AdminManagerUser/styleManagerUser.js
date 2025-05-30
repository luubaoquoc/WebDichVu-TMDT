import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 30px;
  background: #f8f9fc;
  height: 100%;
  margin-top: 60px; /* Adjust based on your header height */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CreateButton = styled.button`
  padding: 8px 16px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #27ae60;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
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
  margin-right: 10px;
  border: none;
  background-color: ${(props) => (props.danger ? "#e74a3b" : "#1cc88a")};
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
