
import React, { useEffect, useState } from "react";
import { WrapperHeader, Logo,LogoImage,SearchWrapper, SearchBar,SearchIcon, Hotline, HotlineText, AuthCart, Navbar, NavItem, DropdownMenu, DropdownColumn, DropdownTitle, DropdownItem, HeaderContainer, Username} from "./style";
import { LogoutOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, message } from "antd";
import AuthForm from "../../pages/AuthPage/AuthPage";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

 // Kiểm tra localStorage để lấy user khi trang load lại

 useEffect(() => {
  const storedUser = localStorage.getItem("user");
  console.log("User lưu trong localStorage:", storedUser);
  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log("User sau khi parse và set state:", parsedUser);
    } catch (error) {
      console.error("Lỗi khi parse JSON từ localStorage:", error);
    }
  }
  setIsModalOpen(false);
}, []);

console.log("Giá trị state user khi render:", user); // Để xem giá trị ở mỗi lần render

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa user khỏi localStorage
    setUser(null); // Cập nhật state để ẩn icon user
    message.success("Đăng xuất thành công!");
    window.location.reload(); // Load lại trang
  };
  // / Menu dropdown khi bấm vào icon user
  // Định nghĩa menu đúng chuẩn mới
const menuItems = [
  { key: "1", label: "Profile" },
  { key: "2", label: "Logout", onClick: handleLogout }
];
    return (
        <HeaderContainer>
        <WrapperHeader>
          {/* Logo + Tên Cửa Hàng */}
          <Logo>
            <LogoImage src="" alt="logo" />
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
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Username>{user.data.user_name}</Username>
              <Dropdown menu={{ items: menuItems }} placement="bottomRight">
                <Avatar size="large" icon={<UserOutlined />} style={{ cursor: "pointer" }} />
              </Dropdown>
            </div>
            ) : (
              <div>
                <span onClick={() => setIsModalOpen(true)}>LOGIN</span>
                <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            )}
            <span>CART <ShoppingCartOutlined style={{ fontSize: "30px" }} /></span>
          </AuthCart>
        </WrapperHeader>
        
        {/* Navbar dưới header */}
        <Navbar>
            <NavItem href="/">Trang chủ</NavItem>
            <NavItem href="/introduce">Giới thiệu</NavItem>
            <NavItem href="/products">Sản phẩm</NavItem>
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
            <NavItem href="news">Tin tức</NavItem>
            <NavItem href="contact">Liên hệ</NavItem>
        </Navbar>
      </HeaderContainer>
      );
      
}
export default HeaderComponent;