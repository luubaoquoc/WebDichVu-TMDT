import React from "react";
import { Form, Input, Select, DatePicker, Checkbox, Button, Breadcrumb } from "antd";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Container, FormWrapper, Title } from "./styleOrderService";
const { Option } = Select;

const OrderService = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  }
  return (
    <Container>
      {/* Tiêu đề */}
      <Breadcrumb>Trang chủ / Dịch vụ / Đặt lịch dịch vụ</Breadcrumb>
      <Title>Đặt lịch dịch vụ</Title>
      {/* Form đặt lịch */}
      <FormWrapper>
        <h2>Đặt lịch dịch vụ</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}> 
            <Input placeholder="Họ tên của bạn" />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}> 
            <Input placeholder="Số điện thoại của bạn" />
          </Form.Item>

          <Form.Item label="Dịch vụ" name="service" rules={[{ required: true, message: "Vui lòng chọn dịch vụ!" }]}> 
            <Select placeholder="Chọn dịch vụ">
              <Option value="lapdat">Lắp đặt điện lạnh</Option>
              <Option value="suachua">Sửa chữa điện lạnh</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Thời gian" name="time" rules={[{ required: true, message: "Vui lòng chọn thời gian!" }]}> 
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}> 
            <Input placeholder="Địa chỉ của bạn" />
          </Form.Item>

          <Form.Item name="note" label="Ghi chú">
            <Input.TextArea placeholder="Nhập ghi chú (nếu có)" rows={4} />
          </Form.Item>

          <Form.Item name="confirm" valuePropName="checked">
            <Checkbox>Xác nhận thông tin</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Đặt lịch</Button>
          </Form.Item>
        </Form>
      </FormWrapper>

      {/* Sidebar */}
      
        <Sidebar />
     
    </Container>
  );
}


export default OrderService;