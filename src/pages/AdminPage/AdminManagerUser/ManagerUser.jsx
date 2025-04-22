import React, { useEffect, useState } from "react";
import {
    Container,
    Title,
    Table,
    Th,
    Tr,
    Td,
    ActionButton,
} from "./styleManagerUser";
import AdminLayout from "../AdminLayout/AdminLayout";
import { getAllUser } from "../../../services/api";

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const res = await getAllUser({}); // hoặc token nếu backend yêu cầu

                if (res.data.status === "success") {
                    setUsers(res.data.data);
                } else {
                    console.error("Lỗi lấy danh sách user:", res.data.message);
                }
            } catch (err) {
                console.error("API lỗi:", err);
            }
        };

        fetchUsers();
    }, []);


    return (
        <AdminLayout>

            <Container>
                <Title>Quản lý người dùng</Title>
                <Table>
                    <thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Tên</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Hành động</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <Tr key={user._id}>
                                <Td>{user._id}</Td>
                                <Td>{user.user_name}</Td>
                                <Td>{user.user_email}</Td>
                                <Td>{user.isAdmin ? "Admin" : "User"}</Td>
                                <Td>
                                    <ActionButton>Sửa</ActionButton>
                                    <ActionButton danger>Chặn</ActionButton>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </AdminLayout>
    );
};

export default UserManagement;
