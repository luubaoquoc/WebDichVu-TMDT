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
  margin: 30px 0;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #003366;
    margin-bottom: 20px;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;
`;

export const CategoryItem = styled.div`
  width: 190px;
  background-color: #0f0f0f;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  p {
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
    text-transform: uppercase;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  border-radius: 6px;
`;