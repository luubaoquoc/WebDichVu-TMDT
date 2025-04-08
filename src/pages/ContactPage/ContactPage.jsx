import React from 'react';
import {
  PageContainer, Title, Breadcrumb, FormWrapper, FormLeft, Label, Input, TextArea, Button, FormRight, MapIframe
} from './styleContact';

const ContactPage = () => {
  return (
    <PageContainer>
      <Breadcrumb>Trang chủ / Liên hệ</Breadcrumb>
      <Title>LIÊN HỆ</Title>
      <FormWrapper>
        <FormLeft>
          <Label>Tên đầy đủ</Label>
          <Input type="text" placeholder="Nhập họ tên" />
          <Label>Email</Label>
          <Input type="email" placeholder="Nhập email" />
          <Label>Điện thoại</Label>
          <Input type="text" placeholder="Nhập số điện thoại" />
          <Label>Nội dung</Label>
          <TextArea rows="6" placeholder="Nhập nội dung cần liên hệ..." />
          <Button>Gửi đi</Button>
        </FormLeft>

        <FormRight>
          <MapIframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7715033490867!2d108.2108493749802!3d16.077342784603335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1744086720814!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </FormRight>
      </FormWrapper>
    </PageContainer>
  );
};

export default ContactPage;

