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
import { getAllUser, registerUser, blockUser } from "../../../services/api";
import CreateUserModal from "../../../components/Modals/Users/CreateUserModal/CreateUserModal";
import EditUserModal from "../../../components/Modals/Users/EditUserModal/EditUserModal";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);


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

    useEffect(() => {
        fetchUsers();
    }, []);

    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleCreateSuccess = async (userData) => {
        try {
            console.log("User data gửi lên:", userData);
            const res = await registerUser(userData); // Gọi API tạo user
            console.log("Kết quả trả về:", res.data);
            if (res.data.status === "success") {
                fetchUsers(); // Reload danh sách user
                closeCreateModal();
            } else {
                alert("Tạo user thất bại: " + res.data.message);
            }
        } catch (err) {
            alert("Lỗi khi tạo user!");
            console.error(err);
        }
    };

    const openEditModal = (userId) => {
        setSelectedUserId(userId);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedUserId(null);
    };
    const handleUpdateSuccess = () => {
        getAllUser({}).then((res) => {
            if (res.data.status === "success") {
                setUsers(res.data.data);
            }
        });
    };

    const handleBlockUser = async (userId, currentStatus) => {
        try {
            const res = await blockUser(userId, !currentStatus);
            if (res.data.status === "success") {
                fetchUsers();
            } else {
                alert("Block user thất bại: " + res.data.message);
            }
        } catch (err) {
            alert("Lỗi khi block user!");
            console.error(err);
        }
    };

    return (
        <AdminLayout>
            <Container>
                <Header>
                    <Title>User Management</Title>
                    <CreateButton onClick={openCreateModal}>
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
                                    <ActionButton onClick={() => openEditModal(user._id)}>
                                        Edit
                                    </ActionButton>
                                    <ActionButton
                                        danger={user.isBlocked}
                                        onClick={() => handleBlockUser(user._id, user.isBlocked)}
                                    >
                                        {user.isBlocked ? "Unblock" : "Block"}
                                    </ActionButton>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                <CreateUserModal
                    isOpen={isCreateModalOpen}
                    onClose={closeCreateModal}
                    onSubmit={handleCreateSuccess}
                />
                <EditUserModal
                    userId={selectedUserId}
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
                    onUpdateSuccess={handleUpdateSuccess}
                />
            </Container>
        </AdminLayout>
    );
};

export default UserManagement;
