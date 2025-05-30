import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
import { getAllUser, registerUser, blockUser, unBlockUser } from "../../../services/api";
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
            const res = await registerUser(userData);
            if (res.data.status === "success") {
                fetchUsers();
                Swal.fire("Thành công!", "Đăng ký thành công!", "success");
                return { success: true };
            } else {
                return { success: false, message: res.data.message || "Tạo user thất bại!" };
            }
        } catch (err) {
            console.error("Lỗi API:", err);
            const message =
                err.response?.data?.message || "Đã có lỗi xảy ra khi tạo user!";
            return { success: false, message };
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

    const handleBlockUser = async (userId, isCurrentlyBlocked) => {
        try {
            let res;

            if (isCurrentlyBlocked) {
                res = await unBlockUser(userId); // Gọi API mở khóa
            } else {
                res = await blockUser(userId, true); // Gọi API khóa
            }

            if (res.data.status === "success") {
                fetchUsers(); // Cập nhật danh sách sau khi khóa/mở
            } else {
                alert("Thao tác thất bại: " + res.data.message);
            }
        } catch (err) {
            alert("Lỗi khi xử lý khóa/mở user!");
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
