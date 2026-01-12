import React, { useEffect, useState } from "react";
import { Container, Title, Table, Th, Tr, Td } from "./styleServiceOrder";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
  confirmServiceOrder,
  getServiceOrders,
  cancelOrderService,
} from "../../../services/api";
import { Popover, Pagination, Modal, message } from "antd";
import timesservices from "../../ServicePage/OrderService/TimesService";

const ServiceOrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

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
        message.success("Đã xác nhận đơn hàng thành công");
      }
    } catch (error) {
      console.error("Lỗi xác nhận đơn:", error);
      message.error("Lỗi xác nhận đơn hàng");
    }
  };

  const handleCancel = (orderId) => {
    Modal.confirm({
      title: "Xác nhận hủy đơn",
      content: "Bạn có chắc chắn muốn hủy đơn đặt dịch vụ này không?",
      okText: "Đồng ý",
      okType: "danger",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        try {
          const res = await cancelOrderService(orderId);
          if (res.data.status === "success" || res.status === 200) {
            // Cập nhật lại danh sách đơn hàng sau khi hủy
            setOrders((prevOrders) =>
              prevOrders.filter((order) => order._id !== orderId)
            );
            message.success("Đã hủy đơn hàng thành công");
          } else {
            message.error("Hủy đơn hàng thất bại");
          }
        } catch (error) {
          console.error("Lỗi hủy đơn:", error);
          message.error("Lỗi khi hủy đơn hàng");
        }
      },
    });
  };

  const getServiceName = (key) => {
    for (const category of Object.values(timesservices)) {
      if (category.services && category.services[key]) {
        return category.services[key].name;
      }
    }
    return key;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderOrderDetails = (order) => (
    <div style={{ maxWidth: "300px" }}>
      <p>
        <strong>Tên khách:</strong> {order.name}
      </p>
      <p>
        <strong>Dịch vụ:</strong> {getServiceName(order.service)}
      </p>
      <p>
        <strong>Ngày:</strong> {new Date(order.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Thời gian:</strong> {order.timeSlot}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {order.address}
      </p>
      <p>
        <strong>SĐT:</strong> {order.phone}
      </p>
      <p>
        <strong>Ghi chú:</strong> {order.note || "Không có"}
      </p>
      <p>
        <strong>Trạng thái:</strong>{" "}
        {order.confirmed ? (
          <span style={{ color: "green" }}>Đã xác nhận</span>
        ) : (
          "Chưa xác nhận"
        )}
      </p>
    </div>
  );

  const currentOrders = orders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
              <Th>SĐT</Th>
              <Th>Trạng thái</Th>
            </Tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <Popover
                key={order._id}
                content={renderOrderDetails(order)}
                title="Chi tiết đơn đặt dịch vụ"
                trigger="hover"
                placement="topLeft"
              >
                <Tr>
                  <Td>{order.name}</Td>
                  <Td>{getServiceName(order.service)}</Td>
                  <Td>{new Date(order.date).toLocaleDateString()}</Td>
                  <Td>{order.timeSlot}</Td>
                  <Td>{order.phone}</Td>
                  <Td>
                    {order.confirmed ? (
                      <span style={{ color: "green" }}>Đã xác nhận</span>
                    ) : (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={() => handleConfirm(order._id)}>
                          Xác nhận
                        </button>
                        <button
                          onClick={() => handleCancel(order._id)}
                          style={{
                            backgroundColor: "#ff4d4f",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          Hủy đơn
                        </button>
                      </div>
                    )}
                  </Td>
                </Tr>
              </Popover>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            current={currentPage}
            total={orders.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </div>
      </Container>
    </AdminLayout>
  );
};

export default ServiceOrderManagement;
