import React, { useEffect, useState } from "react";
import {
    Container,
    Title,
    Table,
    Th,
    Tr,
    Td,
    ActionButton,
    Header,
    CreateButton,
} from "./styleManagerUser";
import AdminLayout from "../AdminLayout/AdminLayout";
import { getAllUser } from "../../../services/api";
import EditUserModal from "../../../components/Modals/EditUserModal/EditUserModal";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

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

    const openModal = (userId) => {
        setSelectedUserId(userId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUserId(null);
    };
    const handleUpdateSuccess = () => {
        getAllUser({}).then((res) => {
            if (res.data.status === "success") {
                setUsers(res.data.data);
            }
        });
    };


    return (
        <AdminLayout>
            <Container>
                <Header>
                    <Title>User Management</Title>
                    <CreateButton onClick={() => alert("Mở form tạo người dùng")}>
                        + Create New
                    </CreateButton>
                </Header>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Phone</Th>
                            <Th>Address</Th>
                            <Th>Role</Th>
                            <Th>Action</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <Tr key={user._id}>
                                <Td>{user.user_name}</Td>
                                <Td>{user.user_email}</Td>
                                <Td>{user.user_phone}</Td>
                                <Td>{user.user_address}</Td>
                                <Td>{user.isAdmin ? "Admin" : "User"}</Td>
                                <Td>
                                    <ActionButton onClick={() => openModal(user._id)}>
                                        Edit
                                    </ActionButton>
                                    <ActionButton danger>Block</ActionButton>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                <EditUserModal
                    userId={selectedUserId}
                    isOpen={modalOpen}
                    onClose={closeModal}
                    onUpdateSuccess={handleUpdateSuccess}
                />
            </Container>
        </AdminLayout>
    );
};

export default UserManagement;
