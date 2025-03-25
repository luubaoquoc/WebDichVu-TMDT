
import React, { useState } from "react";
import { WrapperHeader, Logo,LogoImage,SearchWrapper, SearchBar,SearchIcon, Hotline, HotlineText, AuthCart, Navbar, NavItem, DropdownMenu, DropdownColumn, DropdownTitle, DropdownItem, HeaderContainer} from "./style";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import AuthForm from "../../pages/AuthPage/AuthPage";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <HeaderContainer>
        <WrapperHeader>
          {/* Logo + Tên Cửa Hàng */}
          <Logo>
            <LogoImage src="data:image/png;base64,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" alt="logo" />
            <div>
              <strong>Điện nước</strong>
              <br />
              <strong>QUỐC SƠN</strong>
            </div>
          </Logo>
    
          {/* Thanh tìm kiếm */}
      <SearchWrapper>
        <SearchBar placeholder="Bạn muốn tìm gì ......" />
        <SearchIcon>
          <SearchOutlined />
        </SearchIcon>
      </SearchWrapper>
    
          {/* Hotline */}
          <Hotline>
            <HotlineText>
              <span>📞 <strong>Hotline đặt dịch vụ</strong></span>
              <strong>0393779138</strong>
            </HotlineText>
          </Hotline>
    
          {/* Login + Cart */}
          <AuthCart>
          <div>
              <span onClick={() => setIsModalOpen(true)}>LOGIN</span>
              <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
            <span>CART<ShoppingCartOutlined style={{ fontSize: "30px" }} /></span>
          </AuthCart>
        </WrapperHeader>
        
        {/* Navbar dưới header */}
        <Navbar>
            <NavItem href="#">Trang chủ</NavItem>
            <NavItem href="#">Giới thiệu</NavItem>
            <NavItem href="#">Sản phẩm</NavItem>
            {/* Dropdown Dịch vụ */}
        <NavItem
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Dịch vụ ▼
          <DropdownMenu show={showDropdown}>
            <DropdownColumn>
              <DropdownTitle>Điện nước</DropdownTitle>
              <DropdownItem>Lắp đặt điện lạnh</DropdownItem>
              <DropdownItem>Sửa chữa điện lạnh</DropdownItem>
              <DropdownItem>Lắp đặt điện nước</DropdownItem>
              <DropdownItem>Sửa chữa điện nước</DropdownItem>
              <DropdownItem>Sơn bả & Thạch cao</DropdownItem>
            </DropdownColumn>
            <DropdownColumn>
              <DropdownTitle>Hút bể phốt</DropdownTitle>
              <DropdownItem>Xử lý đường ống</DropdownItem>
              <DropdownItem>Hút vệ sinh</DropdownItem>
              <DropdownItem>Thông tắc cống</DropdownItem>
              <DropdownItem>Thông tắc vệ sinh</DropdownItem>
              <DropdownItem>Thông tắc & xử lý</DropdownItem>
            </DropdownColumn>
            <DropdownColumn>
              <DropdownTitle>Xây dựng nhà ở</DropdownTitle>
              <DropdownItem>Dọn dẹp và vệ sinh</DropdownItem>
              <DropdownItem>Chống thấm & ốp lát</DropdownItem>
              <DropdownItem>Xử lý sự cố</DropdownItem>
              <DropdownItem>Cơi nới & sửa chữa</DropdownItem>
              <DropdownItem>Tư vấn & thiết kế</DropdownItem>
            </DropdownColumn>
          </DropdownMenu>
        </NavItem>
            <NavItem href="#">Tin tức</NavItem>
            <NavItem href="#">Liên hệ</NavItem>
        </Navbar>
      </HeaderContainer>
      );
      
}
export default HeaderComponent;