import React from "react";
import { BannerContainer, BannerImage, CategoriesContainer, CategoryImage, CategoryItem, CategoryList, ContentContainer, ServiceBox, ServicesContainer, Sidebar, SidebarItem, SidebarTitle, Wrapper } from "./styleHome";
import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts";

const HomePage = () => {
    return (
        <Wrapper>
          {/* Danh sách sản phẩm + Banner */}
          <ContentContainer>
            {/* Sidebar danh mục */}
            <Sidebar>
              <SidebarTitle>📋 Danh sách sản phẩm</SidebarTitle>
              <SidebarItem>Điện thông minh</SidebarItem>
              <SidebarItem>Đồ điện gia dụng</SidebarItem>
              <SidebarItem>Thiết bị điện</SidebarItem>
              <SidebarItem>Thiết bị nước</SidebarItem>
              <SidebarItem>Thiết bị vệ sinh</SidebarItem>
              <SidebarItem>Thạch cao thả</SidebarItem>
            </Sidebar>
    
            {/* Banner */}
            <BannerContainer>
              <BannerImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjUzapqoXcpsshx4CuFp-uVmjwFvxAsA2Zg&s" alt="Banner 1" />
            </BannerContainer>
          </ContentContainer>
    
          {/* Các dịch vụ */}
          <ServicesContainer>
            <ServiceBox>🚛 Lắp đặt tận nơi</ServiceBox>
            <ServiceBox>🛠 Đơn vị thi công</ServiceBox>
            <ServiceBox>✅ Sản phẩm chính hãng</ServiceBox>
          </ServicesContainer>
    
          {/* Danh mục nổi bật */}
          <CategoriesContainer>
            <h3>🔹 DANH MỤC NỔI BẬT</h3>
            <CategoryList>
            <CategoryItem>
                <CategoryImage src="/assets/images/dieuhoa.png" alt="Điều hòa, Máy lạnh" />
                <p>Điều hòa</p>
              </CategoryItem>
              <CategoryItem>
                <CategoryImage src="/assets/images/dodungnhabep.png" alt="Đồ dùng nhà bếp" />
                <p>Đồ dùng nhà bếp</p>
              </CategoryItem>
              <CategoryItem>
                <CategoryImage src="/assets/images/maylocnuoc.png" alt="Máy lọc nước" />
                <p>Máy lọc nước</p>
              </CategoryItem>
              <CategoryItem>
                <CategoryImage src="/assets/images/tulanh.png" alt="Tủ lạnh, Tủ đông" />
                <p>Tủ lạnh, Tủ đông</p>
              </CategoryItem>
              <CategoryItem>
                <CategoryImage src="/assets/images/maygiat.png" alt="Máy giặt" />
                <p>Máy giặt</p>
              </CategoryItem>
              <CategoryItem>
                <CategoryImage src="/assets/images/tv.png" alt="TiVi" />
                <p>TiVi, Loa</p>
              </CategoryItem>
            </CategoryList>
          </CategoriesContainer>
          <DiscountedProducts></DiscountedProducts>
        </Wrapper>
      );
    
    }
    export default HomePage;