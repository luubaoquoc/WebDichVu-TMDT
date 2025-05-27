import React from "react";
import { TopbarContainer, TopbarSearch, UserSection, UserAvatar } from "./AdminStyles";

const Topbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <TopbarContainer>
            <TopbarSearch placeholder="Search..." />
            <UserSection>
                <span>{user?.data.user_name || "Admin"}</span>
                <UserAvatar />
            </UserSection>
        </TopbarContainer>
    );
};

export default Topbar;