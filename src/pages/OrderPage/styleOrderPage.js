import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 170px auto 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px 24px;
`;

export const Title = styled.h2`
  color: #003366;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  background: #003366;
  color: #fff;
  padding: 12px 8px;
  font-size: 18px;
  font-weight: 600;
`;

export const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  vertical-align: top;
`;

export const Details = styled.details`
  cursor: pointer;
  summary {
    font-weight: 500;
    color: #2283c5;
    outline: none;
  }
  ul {
    margin: 12px 0 0 0;
    padding: 0 0 0 16px;
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 15px;
  }
  img {
    width: 40px;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #eee;
  }
`;

export const Empty = styled.div`
  color: #888;
  font-size: 18px;
  text-align: center;
  margin: 40px 0;
`;