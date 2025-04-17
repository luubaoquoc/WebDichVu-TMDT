import React from "react";
import Sidebar from "./Sideber";
import Topbar from "./Topbar";
import { Layout, ContentWrapper } from "./AdminStyles";

const AdminLayout = ({ children }) => {
    return (
        <Layout>
            <Sidebar />
            <ContentWrapper>
                <Topbar />
                {children}
            </ContentWrapper>
        </Layout>
    );
};

export default AdminLayout;