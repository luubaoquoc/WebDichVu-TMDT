import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterConponet from "../FooterComponent/FooterComponet";
import FloatingIcons from '../FloatingIcons/FloatingIcons'
import FloatingServiceButton from '../FloatingIcons/FloatingServiceButton'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            <FloatingIcons />
            <FloatingServiceButton />
            {children}
            <FooterConponet />
        </div>
    );
}
export default DefaultComponent;