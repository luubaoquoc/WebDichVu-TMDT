import React, { useEffect, useState } from "react";
import {
    Container,
    Title,
    Table,
    Th,
    Tr,
    Td,
} from "./styleServiceOrder";
import AdminLayout from "../AdminLayout/AdminLayout";
import { confirmServiceOrder, getServiceOrders } from "../../../services/api";

const ServiceOrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getServiceOrders();
                setOrders(res.data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách đơn dịch vụ:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleConfirm = async (orderId) => {
        try {
            const res = await confirmServiceOrder(orderId); // gọi API xác nhận
            if (res.data.status === "success") {
                // cập nhật lại trạng thái trong danh sách
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, confirmed: true } : order
                    )
                );
            }
        } catch (error) {
            console.error("Lỗi xác nhận đơn:", error);
        }
    };


    return (
        <AdminLayout>
            <Container>
                <Title>Quản lý đơn đặt dịch vụ</Title>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Tên khách</Th>
                            <Th>Dịch vụ</Th>
                            <Th>Ngày</Th>
                            <Th>Thời gian</Th>
                            <Th>Địa chỉ</Th>
                            <Th>SĐT</Th>
                            <Th>Ghi chú</Th>
                            <Th>Trạng thái</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <Tr key={order._id}>
                                <Td>{order.name}</Td>
                                <Td>{order.service}</Td>
                                <Td>{new Date(order.date).toLocaleDateString()}</Td>
                                <Td>{order.timeSlot}</Td>
                                <Td>{order.address}</Td>
                                <Td>{order.phone}</Td>
                                <Td>{order.note || "Không có"}</Td>
                                <Td>
                                    {order.confirmed ? (
                                        <span style={{ color: "green" }}>Đã xác nhận</span>
                                    ) : (
                                        <button onClick={() => handleConfirm(order._id)}>Xác nhận</button>
                                    )}
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </AdminLayout>
    );
};

export default ServiceOrderManagement;
