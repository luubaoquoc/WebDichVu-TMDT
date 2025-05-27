import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 30px;
  width: 100%;
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

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  background: #4e73df;
  color: white;
`;

export const Td = styled.td`
  padding: 10px;
`;
