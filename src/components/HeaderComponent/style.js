import { Input } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  position: fixed; /* Giữ nguyên khi cuộn */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Đảm bảo hiển thị trên các phần khác */
`;

export const WrapperHeader = styled.div`
  background-color: #d9d9d9;
  padding: 10px 50px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
  align-items: center;
  gap: 50px;
  height: 70px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`;
export const SearchBar = styled(Input)`
  width: 100%;
  border-radius: 20px;
  height: 50px;
`;
export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  right: 15px;
  font-size: 18px;
  color: gray;
  z-index: 1;
`;



export const Hotline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  
`;

export const HotlineText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
`;

export const AuthCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const Username = styled.span`
  font-size: 18px;
  `

export const Navbar = styled.div`
  background-color: #003366;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 50px;
`;

export const NavItem = styled.a`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 10px 20px;
  &:hover {
    text-decoration: underline;
  }
  &::after {
    content: "";
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 1px;
    background-color: white;
  }
  &:last-child::after {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 50%; 
  transform: translateX(-40%); 
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  padding: 15px;
  display: ${(props) => (props.show ? "flex" : "none")};
   width: 850px;
  min-width: 600px; /* Giúp menu không bị nhỏ */
  color: black; /* Đảm bảo chữ không bị trắng */
`;

export const DropdownColumn = styled.div`
  min-width: 250px;
  padding: 0 3px;
  position: relative;

  &:not(:first-child) {
    border-left: 1px solid #000; /* Tạo dấu gạch giữa các cột */
    padding-left: 20px; /* Tạo khoảng cách sau gạch */
  }
`;

export const DropdownTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
  color: #1A427F;
`;

export const DropdownItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 5px 0 5px 10px;
  cursor: pointer;
  font-weight: normal;
display: flex;
  &:hover {
    text-decoration: underline;
  }
`;
