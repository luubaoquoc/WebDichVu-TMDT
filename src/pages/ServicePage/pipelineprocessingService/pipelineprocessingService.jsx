import React from "react";
import { Breadcrumb, ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "../styleService";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const PipelineProcessingService = () => {
    const navigate = useNavigate();
    const dataSource = [
        {
            key: 1,
            dichvu: 'Kiểm tra, dò tìm điểm rò rỉ nước',
            dongia: '150.000 – 300.000/lần',
            baohanh: '5 tháng',
        },
        {
            key: 2,
            dichvu: 'Thay thế đoạn ống hỏng (PVC/PPR/uPVC)',
            dongia: '30.000 – 50.000/mét (công)',
            baohanh: '12 tháng',
        },
        {
            key: 3,
            dichvu: 'hàn nhiệt đường ống PPR',
            dongia: '50.000 – 100.000/mối',
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
            <Breadcrumb>Trang chủ / Dịch vụ / Xử lý đường ống</Breadcrumb>
            <Title>Xử lý đường ống</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/xu-ly-duong-ong.jpg" alt="Dịch vụ xử lý đường ống" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Kiểm tra, phát hiện rò rỉ và tắc nghẽn trong hệ thống đường ống.</SectionLi>
                        <SectionLi>✅ Xử lý nhanh các sự cố: rò nước, tắc ống, nứt vỡ đường ống âm tường.</SectionLi>
                        <SectionLi>✅ Sử dụng thiết bị chuyên dụng để thông tắc và kiểm tra đường ống.</SectionLi>
                        <SectionLi>✅ Thay thế đoạn ống hư hỏng bằng vật tư chất lượng cao, đúng kỹ thuật.</SectionLi>
                        <SectionLi>✅ Thi công sạch sẽ, bảo hành rõ ràng, không ảnh hưởng kết cấu hiện trạng.</SectionLi>
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


                    <ButtonStyled type="primary" onClick={() => navigate("/orderservice")}>Đặt lịch dịch vụ</ButtonStyled>
                </TextSection>

                <Sidebar />
            </ContentWrapper>
        </Container>
    );
}

export default PipelineProcessingService;
