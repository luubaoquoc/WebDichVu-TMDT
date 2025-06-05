import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getMyOrders } from "../../services/api";
import React from "react";
import { Container, Details, Empty, StyledTable, Td, Th, Title } from "./styleOrderPage";

const MyOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            Swal.fire("Bạn chưa đăng nhập!", "", "warning").then(() => {
                navigate("/");
            });
            return;
        }
        const userId = JSON.parse(storedUser).data._id;
        console.log("User ID:", userId); // Kiểm tra ID người dùng
        getMyOrders(userId)
            .then((data) => {
                setOrders(data.data.data || [])
                console.log("Đơn hàng:", data.data.data); // Kiểm tra dữ liệu đơn hàng
            }
            ) // <-- chỉ lấy mảng data
            .catch(() => Swal.fire("Lỗi!", "Không lấy được đơn hàng!", "error"))
            .finally(() => setLoading(false));
    }, [navigate]);

    if (loading) return <div>Đang tải đơn hàng...</div>;

    return (
        <Container>
            <Title>Đơn hàng của tôi</Title>
            {orders.length === 0 ? (
                <Empty>Bạn chưa có đơn hàng nào.</Empty>
            ) : (
                <StyledTable>
                    <thead>
                        <tr>
                            <Th>Mã đơn</Th>
                            <Th>Ngày đặt</Th>
                            <Th>Tổng tiền</Th>
                            <Th>Trạng thái</Th>
                            <Th>Chi tiết</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <React.Fragment key={order._id}>
                                <tr>
                                    <Td>{order._id}</Td>
                                    <Td>{new Date(order.createdAt).toLocaleString()}</Td>
                                    <Td>{order.totalPrice.toLocaleString()}₫</Td>
                                    <Td>{order.status || "Đang xử lý"}</Td>
                                    <Td>
                                        <Details>
                                            <summary>Xem sản phẩm</summary>
                                            <ul>
                                                {order.orderItems.map((item) => (
                                                    <li key={item._id}>
                                                        <img
                                                            src={`http://localhost:3001${item.image}`}
                                                            alt={item.name}
                                                        />
                                                        <span>
                                                            {item.name} - SL: {item.qty} - Giá: {item.price.toLocaleString()}₫
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Details>
                                    </Td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </StyledTable>
            )}
        </Container>
    );
};

export default MyOrderPage;