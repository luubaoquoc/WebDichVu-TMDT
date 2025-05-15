import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "./stylerefrigerationrepairService";
import Sidebar from "../../../components/Sidebar/Sidebar";

const RefrigerationRepairService = () => {

    const dataSource = [
        {
            key: 1,
            dichvu: 'Vệ sinh máy lạnh 1HP – 2HP',
            dongia: '200.000đ - 300.000đ',
            baoHanh: '5 năm',
        },
        {
            key: 2,
            dichvu: 'Nạp gas R22',
            dongia: '250.000 – 400.000',
            baoHanh: '12 tháng',
        },
        {
            key: 3,
            dichvu: 'Nạp gas R410A',
            dongia: '250.000 – 400.000',
            baoHanh: '12 tháng',
        },
        {
            key: 4,
            dichvu: 'Thay block máy lạnh',
            dongia: '1.500.000 – 2.500.000',
            baoHanh: '8 năm',
        },
        {
            key: 5,
            dichvu: 'Thay tụ máy lạnh',
            dongia: '200.000 – 300.000',
            baoHanh: '5 năm',
        },
        {
            key: 6,
            dichvu: 'Thay cảm biến máy lạnh',
            dongia: '200.000 – 300.000',
            baoHanh: '8 năm',
        },
        {
            key: 7,
            dichvu: 'Thay bo mạch máy lạnh',
            dongia: '1.500.000 – 2.500.000',
            baoHanh: '12 tháng',
        },
        {
            key: 8,
            dichvu: 'Thay quạt dàn lạnh',
            dongia: '200.000 – 300.000',
            baoHanh: '5 năm',
        },
        {
            key: 9,
            dichvu: 'Thay quạt dàn nóng',
            dongia: '200.000 – 300.000',
            baoHanh: '8 năm',
        },
        {
            key: 10,
            dichvu: 'Thay cảm biến nhiệt độ máy lạnh',
            dongia: '200.000 – 300.000',
            baoHanh: '5 năm',
        },
    ];


    return (
        <Container>
            <Breadcrumb>Trang chủ / Dịch vụ / Sửa chữa điện lạnh</Breadcrumb>
            <Title>Sửa chữa điện lạnh</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/sua-chua-dien-lanh.jpg" alt="Dịch vụ sửa chữa điện lạnh" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Sửa chữa máy lạnh, tủ lạnh, máy giặt, máy nước nóng chuyên nghiệp, đúng kỹ thuật.</SectionLi>
                        <SectionLi>✅ Kiểm tra, thay linh kiện như tụ, block, bo mạch, cảm biến… chính xác và nhanh chóng.</SectionLi>
                        <SectionLi>✅ Sử dụng linh kiện chính hãng, gas lạnh đạt chuẩn R22, R32, R410A.</SectionLi>
                        <SectionLi>✅ Khắc phục triệt để lỗi chảy nước, kém lạnh, kêu to, không hoạt động.</SectionLi>
                        <SectionLi>✅ Thi công sạch sẽ, đúng hẹn, có bảo hành rõ ràng sau sửa chữa.</SectionLi>
                    </ul>

                    <SectionTitle>2. Thông tin kỹ thuật viên</SectionTitle>
                    <SectionLi><strong>👷 Kỹ thuật viên:</strong> Lưu Báo Quốc</SectionLi>
                    <SectionLi><strong>📞 SĐT:</strong> 0397799138</SectionLi>
                    <SectionLi><strong>⭐ Kinh nghiệm:</strong> 5 năm</SectionLi>

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
                                    <td>{row.baoHanh}</td>
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

export default RefrigerationRepairService;
