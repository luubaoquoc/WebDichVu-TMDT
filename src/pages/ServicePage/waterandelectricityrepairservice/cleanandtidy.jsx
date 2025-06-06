import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const CleanAndTidyService = () => {
    const navigate = useNavigate();
    const dataSource = [
        {
            key: 1,
            dichvu: 'Dọn dẹp nhà cửa, văn phòng',
            dongia: '120.000 – 250.000/lần',
            baoHanh: '10 ngày',
        },
        {
            key: 2,
            dichvu: 'Vệ sinh công nghiệp nhà xưởng',
            dongia: '150.000 – 300.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 3,
            dichvu: 'Vệ sinh kính, cửa sổ',
            dongia: '100.000 – 200.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 4,
            dichvu: 'Dọn dẹp sau xây dựng',
            dongia: '200.000 – 400.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 5,
            dichvu: 'Dọn dẹp văn phòng',
            dongia: '150.000 – 300.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 6,
            dichvu: 'Dọn dẹp sau sự kiện',
            dongia: '200.000 – 400.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 7,
            dichvu: 'Vệ sinh thảm, ghế sofa',
            dongia: '100.000 – 250.000/m2',
            baoHanh: '10 ngày',
        },
        {
            key: 8,
            dichvu: 'Vệ sinh máy lạnh, điều hòa',
            dongia: '150.000 – 300.000/máy',
            baoHanh: '10 ngày',
        },
    ];


    return (
        <Container>
            <Breadcrumb>Trang chủ / Dịch vụ / Dọn dẹp và vệ sinh</Breadcrumb>
            <Title>Dọn dẹp và vệ sinh</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/don-dep-ve-sinh.jpg" alt="Dịch vụ dọn dẹp và vệ sinh" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Dọn dẹp nhà cửa, văn phòng</SectionLi>
                        <SectionLi>✅ Vệ sinh công nghiệp nhà xưởng</SectionLi>
                        <SectionLi>✅ Vệ sinh kính, cửa sổ</SectionLi>
                        <SectionLi>✅ Dọn dẹp sau xây dựng</SectionLi>
                        <SectionLi>✅ Dọn dẹp sau sự kiện</SectionLi>
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

export default CleanAndTidyService;
