import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: absolute; /* Giữ nguyên khi cuộn */
    top: 220px;
    right: 150px;
    width: 350px;
    height: 100vh;
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SidebarSection = styled.div`
    margin-bottom: 20px;
`;

export const SidebarTitle = styled.h3`
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid #ff6600;
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const SidebarListItem = styled.li`
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #ff6600;
    }
`;