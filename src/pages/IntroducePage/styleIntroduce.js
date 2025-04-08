import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px 150px;
    margin-top: 150px;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #0a3d62;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

export const Highlight = styled.span`
  color: #e74c3c;
  font-weight: bold;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 220px;
  border-radius: 5px;
`;

export const ServiceList = styled.ul`
  margin-left: 20px;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;
