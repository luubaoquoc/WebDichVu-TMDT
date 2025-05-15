import React from "react";
import { ButtonStyled, Container, ContentWrapper, ImageSection, SectionLi, SectionTitle, Table, TextSection, Title } from "./stylewaterandelectricityinstallationService";
import Sidebar from "../../../components/Sidebar/Sidebar";

const WaterAndElectricityInstallationService = () => {


    return (
        <Container>
            <Title>Lắp đặt điện nước</Title>

            <ContentWrapper>
                <ImageSection>
                    <img src="/assets/images/lap-dat-dien-nuoc.jpg" alt="Dịch vụ lắp đặt điện nước" />
                </ImageSection>

                <TextSection>
                    <SectionTitle>1. Thông tin dịch vụ</SectionTitle>
                    <ul>
                        <SectionLi>✅ Lắp đặt hệ thống điện và cấp thoát nước cho nhà ở, văn phòng.</SectionLi>
                        <SectionLi>✅ Thi công ổ cắm, công tắc, đèn chiếu sáng, CB chống giật...</SectionLi>
                        <SectionLi>✅ Đi dây điện âm tường, lắp ống nước PVC/PPR chuyên nghiệp.</SectionLi>
                        <SectionLi>✅ Lắp đặt thiết bị vệ sinh: lavabo, bồn cầu, sen vòi, máy bơm nước...</SectionLi>
                        <SectionLi>✅ Thi công gọn gàng, đúng kỹ thuật, chống rò rỉ và đảm bảo an toàn điện nước.</SectionLi>
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
                                <td>Đi dây điện âm tường (bao gồm ống luồn)</td>
                                <td>25.000 – 40.000/mét</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lắp CB, công tắc, ổ cắm</td>
                                <td>30.000 – 70.000/cái</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lắp đèn trần, đèn LED, đèn gắn tường</td>
                                <td>50.000 – 150.000/bộ</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lắp ống cấp nước (PVC, PPR)</td>
                                <td>30.000 – 50.000/mét</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Lắp ống thoát nước (uPVC)</td>
                                <td>20.000 – 40.000/mét</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Lắp lavabo, vòi nước, sen tắm</td>
                                <td>120.000 – 200.000/cái</td>
                                <td>12 tháng</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Lắp bồn cầu (ngồi hoặc xổm)</td>
                                <td>250.000 – 400.000/bộ</td>
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

export default WaterAndElectricityInstallationService;
