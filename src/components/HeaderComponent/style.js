import { Input } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

export const WrapperHeader = styled.div`
  background-color: #d9d9d9;
  padding: 10px 50px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
  align-items: center;
  gap: 50px;
  height: 90px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
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
  right: 10px;
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
  font-size: 28px;
  text-align: center;
`;

export const AuthCart = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
`;

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