import React from "react";
import {
  Column,
  FooterBottom,
  FooterContainer,
  FooterWrapper,
  LeftColumn,
  MapContainer,
} from "./styleFooter";

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LeftColumn>
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <p>
            <span className="icon">📞</span> Tel: 0393779138
          </p>
          <p>
            <span className="icon">📧</span> quocson@gmail.com
          </p>
          <p>
            <span className="icon">📘</span> Facebook/diennuocquocson
          </p>
          <p>
            <span className="icon">📍</span> CN1: 158 Đồng Kè, Liên Chiểu, Đà
            Nẵng
          </p>
          <p>
            <span className="icon">📍</span> CN2: K27/59 Trần Xuân Lê, Thanh
            Khê, Đà Nẵng
          </p>
          <p>
            <span className="icon">📍</span> CN3: 30 Phan Tứ, Mỹ An, Đà Nẵng
          </p>
          <p>
            <span className="icon">📍</span> CN4: 68 Hàm Nghi
          </p>
        </LeftColumn>

        <Column>
          <h3>CÔNG TY</h3>
          <a href="/">▶ Trang Chủ</a>
          <a href="/introduce">▶ Giới Thiệu</a>
          <a href="/">▶ Dịch Vụ</a>
          <a href="/news">▶ Tin Tức</a>
          <a href="/contact">▶ Liên Hệ</a>
        </Column>

        <MapContainer>
          <iframe
            title="Bản đồ công ty"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7715033490867!2d108.2108493749802!3d16.077342784603335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1744086720814!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapContainer>
      </FooterContainer>

      <FooterBottom>
        <p>🔍 GOOGLE TÌM KIẾM:</p>
        <p>
          "sửa điện nước tại đà nẵng", "sua dien nuoc tai da nang", "sửa điện
          nước tại nhà đà nẵng", "sua chua dien nuoc tai da nang", "thợ điện
          nước tại đà nẵng", "tho dien nuoc tai da nang"
        </p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default FooterComponent;
