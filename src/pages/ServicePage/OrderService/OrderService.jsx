import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Checkbox, Button, Breadcrumb, message } from "antd";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Container, FormWrapper, TimeSlot, TimeSlotGrid, Title } from "./styleOrderService";
import timesservices from "./TimesService";
import Swal from "sweetalert2";
import { createService } from "../../../services/api";
const { Option } = Select;



const OrderService = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false); // State để hiển thị loading khi gửi API
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [form] = Form.useForm();


  const handleServiceChange = (value) => {
    setSelectedService(value);
    if (timesservices.diennuoc.services[value]) {
      setAvailableTimeSlots(timesservices.diennuoc.services[value].timeSlots || []);
    } else if (timesservices.hutbephot.services[value]) {
      setAvailableTimeSlots(timesservices.hutbephot.services[value].timeSlots || []);
    } else {
      setAvailableTimeSlots([]);
    }
  };


  const onFinish = async (values) => {
    setLoading(true); // Bật loading khi gửi API
    try {
      const response = await createService({
        ...values,
        date: values.date.format("YYYY-MM-DD"), // Chuyển ngày thành string
      });

      Swal.fire("Thành công!", "Đặt lịch thành công!", "success");
      console.log("Response:", response.data);
    } catch (error) {
      Swal.fire("Lỗi!", "Đăng ký thành công!", "error");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Tắt loading
    }
  };
  return (
    <Container>
      <Breadcrumb>Trang chủ / Dịch vụ / Đặt lịch dịch vụ</Breadcrumb>
      <Title>Đặt lịch dịch vụ</Title>
      <FormWrapper>
        <h2>Đặt lịch dịch vụ</h2>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}>
            <Input placeholder="Họ tên của bạn" />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}>
            <Input placeholder="Số điện thoại của bạn" />
          </Form.Item>

          <Form.Item label="Dịch vụ" name="service" rules={[{ required: true, message: "Vui lòng chọn dịch vụ!" }]}>
            <Select placeholder="Chọn dịch vụ" onChange={handleServiceChange}>
              {Object.keys(timesservices.diennuoc.services).map((key) => (
                <Option key={key} value={key}>{timesservices.diennuoc.services[key].name}</Option>
              ))}
              {Object.keys(timesservices.hutbephot.services).map((key) => (
                <Option key={key} value={key}>{timesservices.hutbephot.services[key].name}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* Hiển thị khung giờ dựa trên dịch vụ được chọn */}
          <TimeSlotGrid>
            {availableTimeSlots.length > 0 && (
              <Form.Item
                label="Chọn khung giờ"
                name="timeSlot"
                rules={[{ required: true, message: "Vui lòng chọn khung giờ!" }]}
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "5px" }}>
                  {availableTimeSlots.map((slot, index) => (
                    <TimeSlot
                      key={index}
                      selected={selectedTimeSlot === slot} // ✅ truyền prop selected
                      onClick={() => {
                        setSelectedTimeSlot(slot);
                        form.setFieldsValue({ timeSlot: slot }); // cập nhật form
                      }}
                    >
                      {slot}
                    </TimeSlot>
                  ))}
                </div>
              </Form.Item>
            )}
          </TimeSlotGrid>

          <Form.Item label="Thời gian" name="date" rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}>
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

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">Đặt lịch</Button>
          </Form.Item>
        </Form>
      </FormWrapper>
      <Sidebar />
    </Container>
  );
};

export default OrderService;