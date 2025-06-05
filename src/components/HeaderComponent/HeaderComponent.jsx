import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  WrapperHeader,
  Logo,
  LogoImage,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  Hotline,
  HotlineText,
  AuthCart,
  Navbar,
  NavItem,
  DropdownMenu,
  DropdownColumn,
  DropdownTitle,
  DropdownItem,
  HeaderContainer,
  Username,
  CartBadge,
  Cart,
} from "./style";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import Swal from "sweetalert2";
import AuthForm from "../../pages/AuthPage/AuthPage";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const order = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Lỗi khi parse JSON từ localStorage:", error);
      }
    }
    setLoading(false); // Dữ liệu đã tải xong
  }, []);
  if (loading) {
    return null; // Tránh render khi dữ liệu chưa load xong
  }

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    Swal.fire("Thành công!", "Đăng xuất thành công!", "success").then(() => {
      navigate("/"); // ⚠️ Sau khi logout thì chuyển về trang chủ
    });
  };
  // / Menu dropdown khi bấm vào icon user
  // Định nghĩa menu đúng chuẩn mới
  const menuItems = [
    { key: "1", label: "Profile", onClick: () => navigate("/profile-user") },
    {
      key: "2",
      label: "OderService",
      onClick: () => navigate("/my-order-service"),
    },
    { key: "3", label: "Logout", onClick: handleLogout },
  ];
  return (
    <HeaderContainer>
      <WrapperHeader>
        {/* Logo + Tên Cửa Hàng */}
        <Logo>
          <LogoImage
            src="data:image/png;base64,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"
            alt="logo"
          />
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
            <span>
              📞 <strong>Hotline đặt dịch vụ</strong>
            </span>
            <strong>0393779138</strong>
          </HotlineText>
        </Hotline>

        {/* Login + Cart */}
        <AuthCart>
          {loading ? null : user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dropdown menu={{ items: menuItems }} placement="bottomRight">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Username>{user.data.user_name}</Username>
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Dropdown>
            </div>
          ) : (
            <div>
              <span onClick={() => setIsModalOpen(true)}>LOGIN</span>
              <AuthForm
                visible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          )}
          <Cart onClick={() => navigate("/cart")}>
            CART <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            <CartBadge>{order.orderItems?.length}</CartBadge>
          </Cart>
        </AuthCart>
      </WrapperHeader>

      {/* Navbar dưới header */}
      <Navbar>
        <NavItem as={Link} to="/">
          Trang chủ
        </NavItem>
        <NavItem as={Link} to="/introduce">
          Giới thiệu
        </NavItem>
        <NavItem as={Link} to="/products">
          Sản phẩm
        </NavItem>
        {/* Dropdown Dịch vụ */}
        <NavItem
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Dịch vụ ▼
          <DropdownMenu show={showDropdown}>
            <DropdownColumn>
              <DropdownTitle>Điện nước</DropdownTitle>
              <DropdownItem as={Link} to="/installationservice">
                Lắp đặt điện lạnh
              </DropdownItem>
              <DropdownItem as={Link} to="/refrigerationrepairservice">
                Sửa chữa điện lạnh
              </DropdownItem>
              <DropdownItem
                as={Link}
                to="/waterandelectricityinstallationservice"
              >
                Lắp đặt điện nước
              </DropdownItem>
              <DropdownItem as={Link} to="/waterandelectricityrepairservice">
                Sửa chữa điện nước
              </DropdownItem>
              <DropdownItem as={Link} to="/plasterpaintservice">
                Sơn bả & Thạch cao
              </DropdownItem>
            </DropdownColumn>
            <DropdownColumn>
              <DropdownTitle>Hút bể phốt</DropdownTitle>
              <DropdownItem as={Link} to="/pipelineprocessingservice">
                Xử lý đường ống
              </DropdownItem>
              <DropdownItem as={Link} to="/hygienicsuctionservice">
                Hút vệ sinh
              </DropdownItem>
              <DropdownItem as={Link} to="/uncloggingdrainservice">
                Thông tắc cống
              </DropdownItem>
              <DropdownItem as={Link} to="/uncloggingdrainservice">
                Thông tắc vệ sinh
              </DropdownItem>
              <DropdownItem as={Link} to="/uncloggingdrainservice">
                Thông tắc & xử lý
              </DropdownItem>
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
        <NavItem as={Link} to="/news">
          Tin tức
        </NavItem>
        <NavItem as={Link} to="/contact">
          Liên hệ
        </NavItem>
      </Navbar>
    </HeaderContainer>
  );
};
export default HeaderComponent;
