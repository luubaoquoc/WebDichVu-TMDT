import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarLogo, SidebarItem } from "./AdminStyles";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLogo>SB ADMIN 2</SidebarLogo>
            <SidebarItem as={Link} to="/admin/dashboard">Dashboard</SidebarItem>
            <SidebarItem as={Link} to="/admin/manager-user">User Management</SidebarItem>
            <SidebarItem>Product Management</SidebarItem>
            <SidebarItem>Service Management</SidebarItem>
            <SidebarItem>Service Order Management</SidebarItem>
            <SidebarItem>Order Management</SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;