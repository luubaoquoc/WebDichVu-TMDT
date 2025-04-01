import React from "react";
import {
  SidebarContainer,
  SidebarSection,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
} from "./styledSidebar"; // Đảm bảo import đúng file

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* Danh mục sản phẩm */}
      <SidebarSection>
        <SidebarTitle>Danh mục sản phẩm</SidebarTitle>
        <SidebarList>
          <SidebarListItem>Điện thông minh</SidebarListItem>
          <SidebarListItem>Đồ điện gia dụng</SidebarListItem>
          <SidebarListItem>Thiết bị điện</SidebarListItem>
          <SidebarListItem>Thiết bị nước</SidebarListItem>
          <SidebarListItem>Thiết bị vệ sinh</SidebarListItem>
          <SidebarListItem>Thạch cao thả</SidebarListItem>
        </SidebarList>
      </SidebarSection>

      {/* Bài viết đọc nhiều */}
      <SidebarSection>
        <SidebarTitle>Bài viết đọc nhiều</SidebarTitle>
        <SidebarList>
          <SidebarListItem>Giá các dịch vụ lắp đặt</SidebarListItem>
          <SidebarListItem>Hướng dẫn sửa điện nước</SidebarListItem>
          <SidebarListItem>Bảo trì định kỳ</SidebarListItem>
          <SidebarListItem>Tin tức cập nhật</SidebarListItem>
          <SidebarListItem>Tư vấn cải tạo nhà</SidebarListItem>
        </SidebarList>
      </SidebarSection>

      {/* Sản phẩm mới */}
      <SidebarSection>
        <SidebarTitle>Sản phẩm mới</SidebarTitle>
        <SidebarList>
          <SidebarListItem>Điện gia dụng</SidebarListItem>
          <SidebarListItem>Đồ dùng nhà bếp</SidebarListItem>
          <SidebarListItem>Máy lọc nước</SidebarListItem>
          <SidebarListItem>Điều hòa - Máy lạnh</SidebarListItem>
          <SidebarListItem>TV, Loa, Dàn Karaoke</SidebarListItem>
        </SidebarList>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default Sidebar;
