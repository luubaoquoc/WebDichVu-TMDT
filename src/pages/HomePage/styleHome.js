import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 20px 150px;
  margin-top: 150px;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const Sidebar = styled.div`
  width: 300px;
  background: white;
  border: 1px solid #000;
  padding: 10px;
`;

export const SidebarTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
  background: #f5f5f5;
`;

export const SidebarItem = styled.div`
  padding: 15px 0 15px 30px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const BannerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ServiceBox = styled.div`
  flex: 1;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  border: 1px solid #000;
  margin: 0 5px;
`;

export const CategoriesContainer = styled.div`
  margin-top: 30px;
  font-size: 24px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  justify-content: space-between;
    margin: 30px;
`;

export const CategoryItem = styled.div`
  width: 150px;
  text-align: center;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100px;
`;