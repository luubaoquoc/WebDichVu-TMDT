import React from "react";
import { TopbarContainer, TopbarSearch, UserSection, UserAvatar } from "./AdminStyles";

const Topbar = () => {
    return (
        <TopbarContainer>
            <TopbarSearch placeholder="Search..." />
            <UserSection>
                <span>Admin</span>
                <UserAvatar />
            </UserSection>
        </TopbarContainer>
    );
};

export default Topbar;