import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ServiceWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-align: center;
  z-index: 1000;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 5px;
    bottom: 5px;
    transform: scale(0.6);
  }
`;

const ServiceImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: bold;
  color: #fff;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const FloatingServiceButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orderservice");
  };

  return (
    <ServiceWrapper onClick={handleClick}>
      <ServiceImage src="/assets/images/serviceorder.png" alt="Đặt dịch vụ" />
      <Title>ĐẶT DỊCH VỤ TẠI ĐÂY</Title>
    </ServiceWrapper>
  );
};

export default FloatingServiceButton;
