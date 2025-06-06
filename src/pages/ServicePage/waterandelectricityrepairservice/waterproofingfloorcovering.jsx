import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const WaterproofingFloorCoveringService = () => {
    const navigate = useNavigate();
    const dataSource = [
        {
            key: 1,
            dichvu: 'Chống thấm tường, sàn nhà',
            dongia: '150.000 – 300.000/m2',
            baoHanh: '12 tháng',
        },
        {
            key: 2,
            dichvu: 'Ốp lát gạch, đá cho công trình',
            dongia: '200.000 – 400.000/m2',
            baoHanh: '12 tháng',
        },
        {
            key: 3,
            dichvu: 'Thi công chống thấm cho mái nhà',
            dongia: '250.000 – 500.000/m2',
            baoHanh: '12 tháng',
        },
        {
            key: 4,
            dichvu: 'Xử lý triệt để tình trạng thấm dột',
            dongia: '300.000 – 600.000/m2',
            baoHanh: '12 tháng',
        },
        {
            key: 5,
            dichvu: 'Bảo trì và bảo dưỡng định kỳ',
            dongia: '100.000 – 200.000/lần',
            baoHanh: '6 tháng',
        },
    ];


    return (
        <Container>
            <Breadcrumb>Trang chủ / Dịch vụ / <strong>Chống thấm và ốp lát</strong></Breadcrumb>
            <Title>Chống thấm và ốp lát</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/chong-tham-op-lat.jpg" alt="Dịch vụ chống thấm và ốp lát" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Chống thấm tường, sàn nhà</SectionLi>
                        <SectionLi>✅ Ốp lát gạch, đá cho công trình</SectionLi>
                        <SectionLi>✅ Thi công chống thấm cho mái nhà</SectionLi>
                        <SectionLi>✅ Xử lý triệt để tình trạng thấm dột</SectionLi>
                        <SectionLi>✅ Bảo hành dài hạn cho dịch vụ</SectionLi>
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

export default WaterproofingFloorCoveringService;
