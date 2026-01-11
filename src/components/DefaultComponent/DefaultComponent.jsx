import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import FloatingIcons from "../FloatingIcons/FloatingIcons";
import FloatingServiceButton from "../FloatingIcons/FloatingServiceButton";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const DefaultComponent = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent />
      <Content style={{ minHeight: "calc(100vh - 64px - 70px)" }}>
        {children}
        <FloatingIcons />
        <FloatingServiceButton />
      </Content>
      <Footer style={{ padding: "0px" }}>
        <FooterComponent />
      </Footer>
    </Layout>
  );
};
export default DefaultComponent;
