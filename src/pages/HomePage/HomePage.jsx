import React from "react";
import { BannerImage, CategoriesContainer, CategoryImage, CategoryItem, CategoryList, ContentContainer, ServiceBox, ServicesContainer, Wrapper } from "./styleHome";
import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts";

const HomePage = () => {
  return (
    <Wrapper>
      {/* Danh sách sản phẩm + Banner */}
      <ContentContainer>

        <BannerImage src="./assets/images/banner-home.jpg" alt="Banner 1" />

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