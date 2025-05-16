import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";

const HygienicsuctionService = () => {

  const dataSource = [
    {
      key: 1,
      dichvu: 'Hút hầm cầu, bể phốt gia đình xe 1 khối',
      dongia: '300.000 – 500.000 /xe',
      baohanh: '5 tháng',
    },
    {
      key: 2,
      dichvu: 'Hút bể chứa, bùn thải, dầu mỡ)',
      dongia: '800.000 – 1.500.000 /xe',
      baohanh: '12 tháng',
    },
    {
      key: 3,
      dichvu: 'Nạo vét hố ga, đường cống thoát chung',
      dongia: '1.000.000 – 2.000.000 /mét dài',
      baohanh: '12 tháng',
    },
    {
      key: 4,
      dichvu: 'Lắp đặt lại đường ống mới (cấp hoặc thoát)',
      dongia: '30.000 – 60.000/mét (công)',
      baohanh: '8 năm',
    },
    {
      key: 5,
      dichvu: 'Xử lý rò rỉ ống nước nổi (nối ống, thay khớp, dán keo)',
      dongia: '80.000 – 200.000/điểm',
      baohanh: '5 năm',
    },

  ];


  return (
    <Container>
      <Breadcrumb>Trang chủ / Dịch vụ / Hút vệ sinh</Breadcrumb>
      <Title>Hút vệ sinh</Title>

      <ContentWrapper>
        <ImageSection>
          <img src="/assets/images/hut-ve-sinh.jpg" alt="Dịch vụ hút vệ sinh" />
        </ImageSection>

        <TextSection>
          <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
          <ul>
            <SectionLi>✅ Dịch vụ hút hầm cầu, hút bể phốt nhanh chóng, sạch sẽ.</SectionLi>
            <SectionLi>✅ Xử lý triệt để mùi hôi, đầy nước, nghẹt ống thoát thải.</SectionLi>
            <SectionLi>✅ Sử dụng xe bồn chuyên dụng với đầy đủ thiết bị hiện đại.</SectionLi>
            <SectionLi>✅ Thi công đúng kỹ thuật, không đục phá, không gây mùi.</SectionLi>
            <SectionLi>✅ Báo giá minh bạch, có mặt nhanh, bảo hành sau thi công.</SectionLi>
          </ul>

          <SectionTitle>2. Thông tin kỹ thuật viên</SectionTitle>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div >
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/assets/images/ky-thuat-vien-1.jpg"
                  alt="Kỹ thuật viên Lưu Báo Quốc"
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <SectionLi><strong>👷 Kỹ thuật viên:</strong> Lưu Báo Quốc</SectionLi>
              <SectionLi><strong>📞 SĐT:</strong> 0397799138</SectionLi>
              <SectionLi><strong>⭐ Kinh nghiệm:</strong> 5 năm</SectionLi>
            </div>
            <div >
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/assets/images/ky-thuat-vien-1.jpg"
                  alt="Kỹ thuật viên Lê Trung Sơn"
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <SectionLi><strong>👷 Kỹ thuật viên:</strong> Lê Trung Sơn</SectionLi>
              <SectionLi><strong>📞 SĐT:</strong> 0397799138</SectionLi>
              <SectionLi><strong>⭐ Kinh nghiệm:</strong> 5 năm</SectionLi>
            </div>
          </div>

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
              {dataSource.map(row => (
                <tr key={row.key}>
                  <td>{row.key}</td>
                  <td>{row.dichvu}</td>
                  <td>{row.dongia}</td>
                  <td>{row.baohanh}</td>
                </tr>
              ))}
            </tbody>
          </Table>


          <ButtonStyled type="primary" href="/orderservice">Đặt lịch dịch vụ</ButtonStyled>
        </TextSection>

        <Sidebar />
      </ContentWrapper>
    </Container>
  );
}

export default HygienicsuctionService;