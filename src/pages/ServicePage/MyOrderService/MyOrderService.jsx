import React, { useEffect, useState } from "react";
import { getMyOrderService, cancelOrderService } from "../../../services/api";
import { Container, Title } from "./styleMyOrderService";
import { Table, Button, message } from "antd";
import { Breadcrumb } from "../MyOrderService/styleMyOrderService";

const OrderServiceClient = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await getMyOrderService();
            if (res.data.status === "success") {
                setOrders(res.data.data);
            }
        } catch (error) {
            console.error("Lỗi lấy đơn dịch vụ:", error);
        }
    };

    const handleCancel = async (id) => {
        setLoading(true);
        try {
            const res = await cancelOrderService(id);
            if (res.data.status === "success") {
                message.success("Đã hủy đơn thành công!");
                fetchOrders();
            } else {
                message.error("Hủy đơn thất bại!");
            }
        } catch (error) {
            message.error("Có lỗi xảy ra khi hủy đơn!");
        }
        setLoading(false);
    };

    const columns = [
        {
            title: "Dịch vụ",
            dataIndex: "service",
            key: "service",
        },
        {
            title: "Ngày",
            dataIndex: "date",
            key: "date",
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Thời gian",
            dataIndex: "timeSlot",
            key: "timeSlot",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Ghi chú",
            dataIndex: "note",
            key: "note",
            render: (note) => note || "Không có",
        },
        {
            title: "Trạng thái",
            dataIndex: "confirmed",
            key: "confirmed",
            render: (confirmed) => (
                <span style={{ color: confirmed ? "green" : "orange" }}>
                    {confirmed ? "Đã xác nhận" : "Đang chờ"}
                </span>
            ),
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                !record.confirmed && (
                    <Button
                        danger
                        loading={loading}
                        onClick={() => handleCancel(record._id)}
                    >
                        Hủy
                    </Button>
                )
            ),
        },
    ];

    return (
        <Container>
            <Breadcrumb>Trang chủ / Đơn đặt dịch vụ</Breadcrumb>
            <Title>Đơn đặt dịch vụ của bạn</Title>
            <Table dataSource={orders} columns={columns} rowKey="_id" />
        </Container>
    );
};

export default OrderServiceClient;