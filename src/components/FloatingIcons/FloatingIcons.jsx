import React from 'react';
import styled from 'styled-components';


const IconWrapper = styled.div`
 position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export default function FloatingIcons() {
  return (
    <IconWrapper>
      <Icon href="https://zalo.me/your-zalo-id" target="_blank">
        <img src="/assets/images/zalo.png" alt="Zalo" />
      </Icon>
      <Icon href="tel:0393779138">
        <img src="/assets/images/phone.png" alt="Phone" />
      </Icon>
    </IconWrapper>
  );
}
