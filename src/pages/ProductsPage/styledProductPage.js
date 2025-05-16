import styled from 'styled-components';


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


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cột */
  gap: 16px;
  padding: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 cột */
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* Mobile: 1 cột */
  }
`;
export const PaginationWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`;