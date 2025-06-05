import React from "react";
import styled from "styled-components";

const newsList = [
    {
        image: "/assets/images/sua-dien-2.jpg",
        title: "SỬA ĐIỆN TẠI NHÀ ĐÀ NẴNG",
        desc: "Thi công hệ thống điện âm tại đường Hùng Vương quận Hải Châu TP Đà Nẵng ai có nhu cầu LH 0389862456",
        link: "#",
    },
    {
        image: "/assets/images/sua-nuoc-2.jpg",
        title: "SỬA NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Lắp bơm trợ lực lên bồn tại đường hàm nghi TP Đà Nẵng ai có nhu cầu LH 0389862456",
        link: "#",
    },
    {
        image: "/assets/images/sua-nuoc-tai-nha.jpg",
        title: "SỬA NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Thay mới bồn nước inox toàn mỹ tại đường Thái Thị bôi quận Thanh Khê TP Đà Nẵng ai có nhu cầu LH 0389862456...",
        link: "#",
    },
    {
        image: "/assets/images/sua-nuoc.jpg",
        title: "SỬA NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Lắp máy bơm nước tăng áp lực tại đường Phan Thanh quận Thanh Khê TP Đà Nẵng ai có nhu cầu LH 0389862456",
        link: "#",
    },
    {
        image: "/assets/images/thong-tac.jpg",
        title: "SỬA THÔNG TẮC CẦU CỐNG TẠI NHÀ ĐÀ NẴNG",
        desc: "Thông tắc kết hợp chống thấm cổ ống bồn cầu tại đường Trần Bình Trọng quận Hải Châu TP Đà Nẵng. Ai có...",
        link: "#",
    },
    {
        image: "/assets/images/sua-may-bom.jpg",
        title: "SỬA MÁY BƠM NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Sửa máy bơm nước tại đường Thái Thị bôi quận Thanh Khê Đà Nẵng.ai có nhu cầu Lh em 0389862456",
        link: "#",
    },
    {
        image: "/assets/images/sua-dien-tai-nha.jpg",
        title: "SỬA CHỮA ĐIỆN NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Thay thế ống nước nóng lạnh âm tường tại đường Hàm nghi quận Thanh Khê Đà Nẵng ai có nhu cầu LH em...",
        link: "#",
    },
    {
        image: "/assets/images/sua-dien.jpg",
        title: "SỬA CHỮA HỆ THỐNG NƯỚC TẠI NHÀ ĐÀ NẴNG",
        desc: "Thi công lắp đặt máy bơm nước tại đường hòa minh 17 quận Liên chiểu Đà Nẵng.ai có nhu cầu LH 0389862456...",
        link: "#",
    },
];

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 150px 16px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #222;
  letter-spacing: 1px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 32px 20px;
`;

const NewsCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 16px 14px 10px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NewsTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: #0066b2;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const NewsDesc = styled.div`
  font-size: 15px;
  color: #222;
  margin-bottom: 18px;
  flex: 1;
`;

const NewsLink = styled.a`
  font-weight: 600;
  color: #2283c5;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #003366;
    text-decoration: underline;
  }
  display: inline-block;
`;

const NewsPage = () => {
    return (
        <Wrapper>
            <Title>TIN TỨC</Title>
            <Grid>
                {newsList.map((news, idx) => (
                    <NewsCard key={idx}>
                        <NewsImage src={news.image} alt={news.title} />
                        <NewsContent>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsDesc>{news.desc}</NewsDesc>
                            <NewsLink href={news.link}>Chi tiết &nbsp; &raquo;</NewsLink>
                        </NewsContent>
                    </NewsCard>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default NewsPage;