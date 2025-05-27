import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarLogo, SidebarItem } from "./AdminStyles";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLogo>QUOCSON</SidebarLogo>
            <SidebarItem as={Link} to="/admin/dashboard">Dashboard</SidebarItem>
            <SidebarItem as={Link} to="/admin/manager-user">Users</SidebarItem>
            <SidebarItem as={Link} to="/admin/products">Products</SidebarItem>
            <SidebarItem>Services</SidebarItem>
            <SidebarItem as={Link} to="/admin/manager-service-order">Service Orders</SidebarItem>
            <SidebarItem>Product Orders</SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;