import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 150px 0 0 150px;
  padding: 20px 0;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #003366;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  
`;

export const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 500px;
    border-radius: 10px;
  }
`;

export const TextSection = styled.div`
  flex: 2;
`;

export const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin-top: 25px;
`;

export const SectionLi = styled.li`
  font-size: 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #003366;
    color: white;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;
  width: 100%;
  height: 45px;
  font-size: 18px;
  background-color: #003366;
  border: none;
  &:hover {
    background-color: #002244;
  }
`;
