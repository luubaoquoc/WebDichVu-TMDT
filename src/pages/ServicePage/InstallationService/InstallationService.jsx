import React from "react";
import { ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "./styleinstallation";
import Sidebar from "../../../components/Sidebar/Sidebar";

const InstallationService = () => {


  return (
    <Container>
      <Title>Lắp đặt điện lạnh</Title>

      <ContentWrapper>
        <ImageSection>
          <img src="/assets/images/dich-vu-dien-lanh.png" alt="Dịch vụ lắp đặt điện lạnh" />
        </ImageSection>

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
                <th>Bảo hành</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Công lắp máy lạnh 1HP - 2HP</td>
                <td>250.000 - 400.000</td>
                <td>12 tháng</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ống đồng (1HP - 2HP)</td>
                <td>180.000 - 280.000/mét</td>
                <td>12 tháng</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dây điện 2x1.5/2x2.5mm</td>
                <td>15.000 - 30.000/mét</td>
                <td>12 tháng</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Ống nước xả PVC</td>
                <td>10.000 - 15.000/mét</td>
                <td>12 tháng</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Giá đỡ dàn nóng</td>
                <td>100.000 - 150.000/cặp</td>
                <td>12 tháng</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Hút chân không (máy inverter)</td>
                <td>100.000 - 200.000/lần</td>
                <td>12 tháng</td>
              </tr>

            </tbody>
          </Table>

          <ButtonStyled type="primary" href="/orderservice">Đặt lịch dịch vụ</ButtonStyled>
        </TextSection>

        <Sidebar />
      </ContentWrapper>
    </Container>
  );
}

export default InstallationService;
