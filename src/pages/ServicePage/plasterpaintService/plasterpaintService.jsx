import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const PlasterPaintService = () => {
    const navigate = useNavigate();

    const dataSource = [
        {
            key: 1,
            loaiTran: 'Trần giật cấp từ 2-3 lớp cấp',
            vatLieu: 'Khung xương Hà Nội, Tấm thạch cao Thái',
            gia200: '140.000đ/m2',
            gia50: '145.000đ/m2',
            gia30: '150.000đ/m2',
            baoHanh: '5 năm',
        },
        {
            key: 2,
            loaiTran: 'Trần giật cấp từ 2-3 lớp cấp',
            vatLieu: 'Khung xương Vĩnh Tường loại 1, tấm thạch cao Thái 9mm',
            gia200: '150.000đ/m2',
            gia50: '155.000đ/m2',
            gia30: '160.000đ/m2',
            baoHanh: '8 năm',
        },
        {
            key: 3,
            loaiTran: 'Trần phẳng',
            vatLieu: 'Khung xương Hà Nội, Tấm thạch cao Thái',
            gia200: '135.000đ/m2',
            gia50: '140.000đ/m2',
            gia30: '145.000đ/m2',
            baoHanh: '5 năm',
        },
        {
            key: 4,
            loaiTran: 'Trần phẳng',
            vatLieu: 'Khung xương Vĩnh Tường, tấm thạch cao Thái 9mm',
            gia200: '145.000đ/m2',
            gia50: '150.000đ/m2',
            gia30: '155.000đ/m2',
            baoHanh: '8 năm',
        },
        {
            key: 5,
            loaiTran: 'Trần tấm thả',
            vatLieu: 'Tấm thả phủ nhựa màu trắng, 60x60cm, Khung xương Hà Nội, tấm Thái',
            gia200: '130.000đ/m2',
            gia50: '140.000đ/m2',
            gia30: '145.000đ/m2',
            baoHanh: '5 năm',
        },
        {
            key: 6,
            loaiTran: 'Trần tấm thả',
            vatLieu: 'Tấm thả phủ nhựa màu trắng, 60x60cm, Khung xương Vĩnh Tường, tấm Thái',
            gia200: '135.000đ/m2',
            gia50: '145.000đ/m2',
            gia30: '150.000đ/m2',
            baoHanh: '8 năm',
        },
    ];


    return (
        <Container>
            <Breadcrumb>Trang chủ / Dịch vụ / Sơn bả & Thạch cao</Breadcrumb>
            <Title>Sơn bả & Thạch cao</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/son-ba-thach-cao.jpg" alt="Dịch vụ lắp đặt điện lạnh" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Thi công sơn bả thạch cao chuyên nghiệp, đúng quy trình.</SectionLi>
                        <SectionLi>✅ Bả 2 lớp, sơn lót và sơn phủ đảm bảo độ bền, mịn đẹp.</SectionLi>
                        <SectionLi>✅ Sử dụng sơn chính hãng như Dulux, Jotun, Maxilite...</SectionLi>
                        <SectionLi>✅ Bề mặt xử lý kỹ, không bong tróc, không thấm nước.</SectionLi>
                        <SectionLi>✅ Thi công sạch sẽ, đúng tiến độ, bảo hành rõ ràng.</SectionLi>
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
                                <th>Loại trần</th>
                                <th>Vật liệu</th>
                                <th>Đơn giá (Trên 200m2)</th>
                                <th>Đơn giá (Từ 50m2 - 100m2)</th>
                                <th>Đơn giá (Từ 30m2 - 50m2)</th>
                                <th>Bảo hành</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSource.map(row => (
                                <tr key={row.key}>
                                    <td>{row.loaiTran}</td>
                                    <td>{row.vatLieu}</td>
                                    <td>{row.gia200}</td>
                                    <td>{row.gia50}</td>
                                    <td>{row.gia30}</td>
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

export default PlasterPaintService;
