import React, { useEffect, useState } from "react";
import { getMyOrders } from "../../../services/api";
import { Container, Title } from "./styleMyOrderService";
import { Table } from "antd";
import { Breadcrumb } from "../MyOrderService/styleMyOrderService";

const OrderServiceClient = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getMyOrders();
                if (res.data.status === "success") {
                    setOrders(res.data.data);
                }
            } catch (error) {
                console.error("Lỗi lấy đơn dịch vụ:", error);
            }
        };

        fetchOrders();
    }, []);

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
