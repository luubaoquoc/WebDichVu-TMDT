import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const WaterAndElectricityRepairService = () => {
    const navigate = useNavigate();
    const dataSource = [
        {
            key: 1,
            dichvu: 'Sửa chập cháy, mất điện cục bộ',
            dongia: '120.000 – 250.000/lần',
            baoHanh: '12 tháng',
        },
        {
            key: 2,
            dichvu: 'Sửa tủ điện, aptomat nhảy liên tục',
            dongia: '150.000 – 300.000/bộ',
            baoHanh: '12 tháng',
        },
        {
            key: 3,
            dichvu: 'Kiểm tra, xử lý rò rỉ điện, điện yếu',
            dongia: '150.000 – 250.000/lần',
            baoHanh: '12 tháng',
        },
        {
            key: 4,
            dichvu: 'Sửa dây điện bị đứt âm tường',
            dongia: '30.000 – 60.000/mét',
            baoHanh: '8 năm',
        },
        {
            key: 5,
            dichvu: 'Sửa ống nước rò rỉ (nối, dán, hàn ống)',
            dongia: '80.000 – 200.000/điểm',
            baoHanh: '5 tháng',
        },
        {
            key: 6,
            dichvu: 'Sửa vòi nước, sen tắm, van khóa bị hư',
            dongia: '60.000 – 150.000/cái',
            baoHanh: '8 tháng',
        },
        {
            key: 7,
            dichvu: 'Sửa bồn cầu xả yếu, rò rỉ nước, kẹt phao',
            dongia: '120.000 – 250.000/bộ',
            baoHanh: '12 tháng',
        },
        {
            key: 8,
            dichvu: 'Xử lý nước yếu, nước không lên bồn',
            dongia: '150.000 – 250.000/lần',
            baoHanh: '5 tháng',
        },
    ];


    return (
        <Container>
            <Breadcrumb>Trang chủ / Dịch vụ / Sửa chữa điện nước</Breadcrumb>
            <Title>Sửa chữa điện nước</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/sua-chua-dien-nuoc.jpg" alt="Dịch vụ sửa chữa điện nước" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Sửa chữa hệ thống điện, cấp thoát nước cho nhà ở, văn phòng chuyên nghiệp, đúng kỹ thuật.</SectionLi>
                        <SectionLi>✅ Xử lý nhanh các sự cố như chập điện, rò điện, mất điện, cháy CB, đèn không sáng...</SectionLi>
                        <SectionLi>✅ Thay thế thiết bị như ổ cắm, công tắc, đèn, CB, vòi nước, ống nước... bằng linh kiện chính hãng.</SectionLi>
                        <SectionLi>✅ Khắc phục triệt để tình trạng rò rỉ nước, tắc nghẽn ống, máy bơm không chạy, nước yếu.</SectionLi>
                        <SectionLi>✅ Thi công gọn gàng, đúng hẹn, có bảo hành rõ ràng sau sửa chữa.</SectionLi>
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
                                    <td>{row.baoHanh}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>


                    <ButtonStyled type="primary" onClick={() => navigate("/orderservice")}>Đặt lịch dịch vụ</ButtonStyled>
                </TextSection>

                <Sidebar />
            </ContentWrapper>
        </Container>
    );
}

export default WaterAndElectricityRepairService;
