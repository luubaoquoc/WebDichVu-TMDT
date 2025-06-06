import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
    Container,
    Title,
    Table,
    Th,
    Tr,
    Td,
    Header,
    ActionButton,
} from "./styleAdminProductOrder";
import { getAllOrders, deleteOrder } from "../../../services/api";
import ConfirmDeleteModal from "../../../components/Modals/Products/CreateProduct/deleteProduct";

const AdminProductOrder = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const res = await getAllOrders();
            console.log("Danh sách đơn hàng:", res.data.data);
            setOrders(res.data.data || []);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách đơn hàng:", error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);



    return (
        <AdminLayout>
            <Container>
                <Header>
                    <Title>Product Orders Management</Title>
                </Header>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Order ID</Th>
                            <Th>Customer</Th>
                            <Th>Date</Th>
                            <Th>Status</Th>
                            <Th>Total</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <Tr key={order._id}>
                                <Td>{order._id}</Td>
                                <Td>{order?.shippingAddress?.fullName || "N/A"}</Td>
                                <Td>{new Date(order.createdAt).toLocaleString()}</Td>
                                <Td>{order.status || "Chờ xử lý"}</Td>
                                <Td>{order.totalPrice?.toLocaleString()}₫</Td>
                                <Td>
                                    {/* Thêm nút xem chi tiết nếu muốn */}
                                    <ActionButton onClick={() => console.log("View details for", order._id)}>
                                        View Details
                                    </ActionButton>
                                    <ActionButton>Confirm</ActionButton>
                                    <ActionButton danger >
                                        Delete
                                    </ActionButton>

                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>

            </Container>
        </AdminLayout>
    );
};

export default AdminProductOrder;