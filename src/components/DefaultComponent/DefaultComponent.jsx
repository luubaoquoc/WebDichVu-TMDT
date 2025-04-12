import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterConponet from "../FooterComponent/FooterComponet";

const DefaultComponent = ({children}) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            <FooterConponet/>
        </div>
    );
}
export default DefaultComponent;