import { Col, Input, Row } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000; /* Đảm bảo hiển thị trên các phần khác */
`;

export const WrapperHeader = styled(Row)`
  background-color: #d9d9d9;
  padding: 10px 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 3rem;
  justify-content: center;
  @media (max-width: 576px) {
    transform: scale(0.8);
  }
`;

export const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: contain;
`;

export const SearchWrapper = styled(Col)``;

export const SearchBar = styled(Input)`
  width: 100%;
  border-radius: 20px;
  height: 50px;
`;
export const SearchIcon = styled(SearchOutlined)`
  font-size: 2rem;
  color: gray;
  padding: 0 3px;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const SearchButton = styled(Col)`
  text-align: center;
`;

export const Hotline = styled(Col)`
  @media (max-width: 992px) {
    max-width: 150px;
`;

export const HotlineText = styled(Row)`
  text-align: center;
  font-size: 2rem !important;
  & * {
    font-size: inherit !important;
  }
`;

export const AuthCart = styled(Col)`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Cart = styled(Link)`
  color: black;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: #d0021b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
`;

export const Username = styled.span`
  font-size: 18px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  background-color: #003366;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 10px 20px;
  &::after {
    content: "";
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    height: 25px;
    width: 1px;
    background-color: white;
  }
  &:last-child::after {
    display: none;
  }
  @media (max-width: 992px) {
    font-size: 1.6rem;
    &:hover {
      color: white;
      background-color: #002244;
    }
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
  color: #1a427f;
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
