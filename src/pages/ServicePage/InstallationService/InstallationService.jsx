import React from "react";
import { ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, TextSection, Title } from "./styleinstallation";
import { Breadcrumb, Table } from "antd";
import Sidebar from "../../../components/Sidebar/Sidebar";


const InstallationService = () => {
  return (
    <Container>


      {/* Tiêu đề */}
      <Breadcrumb>Trang chủ / Dịch vụ / Lắp đặt điện lạnh</Breadcrumb>
      <Title>Lắp đặt điện lạnh</Title>

      <ContentWrapper>
        {/* Hình ảnh minh họa */}
        <ImageSection>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcE0pIYlfUNpj_tCsEGgSJdZHsnGOnAgfsw&s" alt="Dịch vụ lắp đặt điện lạnh" />
        </ImageSection>

        {/* Nội dung chi tiết dịch vụ */}
        <TextSection>
          <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
          <ul>
            <SectionLi>✅ Lắp đặt điều hòa (máy lạnh)</SectionLi>
            <SectionLi>✅ Treo tường, âm trần, tủ đứng, multi, VRV/VRF...</SectionLi>
            <SectionLi>✅ Hỗ trợ tư vấn chọn điều hòa phù hợp.</SectionLi>
            <SectionLi>✅ Lắp đặt gọn gàng, kỹ thuật cao.</SectionLi>
            <SectionLi>✅ Đảm bảo kỹ thuật, chống rò rỉ gas.</SectionLi>
          </ul>

          <SectionTitle>2. Thông tin kỹ thuật viên</SectionTitle>
            <SectionLi><strong>👷 Kỹ thuật viên:</strong> Lưu Báo Quốc</SectionLi>
            <SectionLi><strong>📞 SĐT:</strong> 0397799138</SectionLi>
            <SectionLi><strong>⭐ Kinh nghiệm:</strong> 5 năm lắp đặt, sửa chữa</SectionLi>

          <SectionTitle>3. Bảng giá</SectionTitle>
          <Table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Dịch vụ</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lắp đặt điều hòa treo tường</td>
                <td>300.000đ</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sửa chữa điện lạnh</td>
                <td>250.000đ</td>
              </tr>
            </tbody>
          </Table>

          <ButtonStyled type="primary">Đặt lịch dịch vụ</ButtonStyled>
        </TextSection>
          
          <Sidebar />
       
      </ContentWrapper>
        
     
    </Container>
  );
}


export default InstallationService;