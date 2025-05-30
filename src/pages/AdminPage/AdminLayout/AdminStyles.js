import styled from "styled-components";

// Layout tổng thể
export const Layout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fc;
`;

// Sidebar
export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #4e73df;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  position: fixed;
  height: 100%;
`;

export const SidebarLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const SidebarItem = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  font-size: 24px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #2e59d9;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Topbar
export const TopbarContainer = styled.div`
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e3e6f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  z-index: 1000;
  font-size: 24px;
`;

export const TopbarSearch = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 6px 10px;
  width: 300px;
  font-size: 16px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ddd;
  border-radius: 50%;
`;
