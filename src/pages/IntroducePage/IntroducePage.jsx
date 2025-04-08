import React from "react";
import { Breadcrumb, FlexRow, Highlight, Image, ListItem, PageContainer, Paragraph, Section, ServiceList, SubTitle, Title } from "./styleIntroduce";




const  IntroducePage = () => {
  return (
    <PageContainer>
      <Breadcrumb>Trang chủ / Giới thiệu</Breadcrumb>
      <Title>GIỚI THIỆU CÔNG TY</Title>

      <FlexRow>
        <Image src="assets/images/repairIntroduce.jpg" alt="Sửa chữa điện nước" />
        <Section>
          <SubTitle>SỬA CHỮA ĐIỆN NƯỚC UY TÍN TẠI ĐÀ NẴNG</SubTitle>
          <Paragraph>
            Dù là nhà ở, nhà phố, căn hộ hay nhà xưởng, nếu có quy mô lớn, việc hư hỏng hệ thống điện nước cũng được xem là tình huống nguy hiểm. Việc sửa chữa điện nước đúng cách không chỉ đảm bảo an toàn, hoạt động tốt mà còn giúp tránh rủi ro trong quá trình sinh hoạt và sử dụng thường xuyên.
          </Paragraph>
        </Section>
      </FlexRow>

      <Section>
        <SubTitle>ĐIỆN NƯỚC QUỐC SƠN – CHUYÊN NGHIỆP, TẬN TÌNH, GIÁ HỢP LÝ</SubTitle>
        <Paragraph>
          Là một trong những đơn vị cung cấp dịch vụ điện nước tại Đà Nẵng, <Highlight>Quốc Sơn</Highlight> sở hữu đội ngũ thợ kỹ thuật cao, giàu kinh nghiệm. Chúng tôi tư vấn, khảo sát tận nơi, xử lý hệ thống điện nước từ A–Z nhanh chóng và chính xác.
        </Paragraph>
        <ServiceList>
          <ListItem>Sửa chữa các sự cố về nước, điện</ListItem>
          <ListItem>Sửa ống nước âm tường, thay vòi nước, lắp máy nước nóng</ListItem>
          <ListItem>Sửa chữa bơm nước, sửa máy bơm bị yếu, không lên nước</ListItem>
          <ListItem>Thay thế ổ cắm điện, aptomat, công tắc bị hỏng</ListItem>
          <ListItem>Khắc phục sự cố rò rỉ nước, đường ống bị tắc</ListItem>
        </ServiceList>
      </Section>

      <FlexRow>
        <Image src="/assets/images/repair-3.png" alt="Thợ sửa ống nước" />
        <Section>
          <SubTitle>THỢ GIỎI, BÁO GIÁ TRƯỚC KHI LÀM</SubTitle>
          <Paragraph>
            Điện nước Quốc Sơn luôn báo giá rõ ràng, hợp lý trước khi thực hiện. Cam kết minh bạch, không phát sinh. Chúng tôi có đội ngũ thợ giỏi, nhanh nhẹn, thao tác gọn gàng và sạch sẽ trong quá trình làm việc.
          </Paragraph>
        </Section>
      </FlexRow>

      <FlexRow>
        <Image src="/assets/images/repair-4.jpg" alt="Sửa vòi nước tại nhà" />
        <Section>
          <SubTitle>DỊCH VỤ SỬA ĐIỆN NƯỚC TẬN NHÀ</SubTitle>
          <Paragraph>
            Với hơn 10 năm trong ngành, Khánh Khôi nhận sửa chữa điện nước tận nơi nhanh chóng – 24/24 tất cả các ngày trong tuần. Chỉ cần bạn gọi, chúng tôi sẽ có mặt và xử lý triệt để mọi vấn đề.
          </Paragraph>
          <Paragraph>
            <Highlight>Phục vụ 24/24</Highlight> tất cả các ngày trong tuần. Hãy gọi ngay <Highlight> - 0393779138 - </Highlight> để được hỗ trợ nhanh nhất!
          </Paragraph>
        </Section>
      </FlexRow>
    </PageContainer>
  );
}

export default IntroducePage;