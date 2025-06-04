import React, { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Checkbox, Button, Breadcrumb } from "antd";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Container, FormWrapper, TimeSlot, TimeSlotGrid, Title } from "./styleOrderService";
import timesservices from "./TimesService";
import Swal from "sweetalert2";
import { createService, getOrderServiceTimeSlots } from "../../../services/api";
import moment from "moment";

const { Option } = Select;

const OrderService = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Lấy danh sách slot đã đặt từ API
  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!selectedService || !selectedDate) {
        setBookedTimeSlots([]);
        return;
      }
      try {
        const data = await getOrderServiceTimeSlots(selectedDate, selectedService);
        setBookedTimeSlots(data || []);
      } catch {
        setBookedTimeSlots([]);
      }
    };
    fetchBookedSlots();
  }, [selectedService, selectedDate]);

  // Xử lý thay đổi dịch vụ
  const handleServiceChange = (value) => {
    setSelectedService(value);
    setSelectedTimeSlot(null);
    form.setFieldsValue({ timeSlot: null });

    const service =
      timesservices.diennuoc.services[value] ||
      timesservices.hutbephot.services[value];

    setAvailableTimeSlots(service?.timeSlots || []);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    setSelectedTimeSlot(null);
    form.setFieldsValue({ timeSlot: null });
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await createService({
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      });
      Swal.fire("Thành công!", "Đặt lịch thành công!", "success");
      form.resetFields();
      setSelectedService(null);
      setAvailableTimeSlots([]);
      setSelectedTimeSlot(null);
      setSelectedDate(null);
      setBookedTimeSlots([]);
    } catch (error) {
      Swal.fire("Lỗi!", "Đặt lịch thất bại!", "error");
    } finally {
      setLoading(false);
    }
  };

  // Tạo danh sách Option dịch vụ
  const renderServiceOptions = () => {
    const diennuoc = Object.entries(timesservices.diennuoc.services).map(([key, val]) => (
      <Option key={key} value={key}>{val.name}</Option>
    ));
    const hutbephot = Object.entries(timesservices.hutbephot.services).map(([key, val]) => (
      <Option key={key} value={key}>{val.name}</Option>
    ));
    return [...diennuoc, ...hutbephot];
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
              {renderServiceOptions()}
            </Select>
          </Form.Item>
          <Form.Item
            label="Thời gian"
            name="date"
            rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={handleDateChange}
              disabledDate={(current) => current && current < moment().startOf("day")}
            />
          </Form.Item>

          {availableTimeSlots.length > 0 && (
            <Form.Item
              label="Chọn khung giờ"
              name="timeSlot"
              rules={[{ required: true, message: "Vui lòng chọn khung giờ!" }]}
            >
              <TimeSlotGrid>
                {availableTimeSlots.map((slot, idx) => {
                  const isBooked = bookedTimeSlots.includes(slot);
                  return (
                    <TimeSlot
                      key={idx}
                      selected={selectedTimeSlot === slot}
                      disabled={isBooked}
                      onClick={() => {
                        if (!isBooked) {
                          setSelectedTimeSlot(slot);
                          form.setFieldsValue({ timeSlot: slot });
                        }
                      }}
                    >
                      {slot}
                    </TimeSlot>
                  );
                })}
              </TimeSlotGrid>
            </Form.Item>
          )}

          <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}>
            <Input placeholder="Địa chỉ của bạn" />
          </Form.Item>

          <Form.Item name="note" label="Ghi chú">
            <Input.TextArea placeholder="Nhập ghi chú (nếu có)" rows={4} />
          </Form.Item>

          <Form.Item
            name="confirm"
            valuePropName="checked"
            rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject("Vui lòng xác nhận thông tin!") }]}
          >
            <Checkbox>Tôi xác nhận thông tin đã nhập là chính xác</Checkbox>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" loading={loading}>Đặt lịch</Button>
          </Form.Item>
        </Form>
      </FormWrapper>
      <Sidebar />
    </Container>
  );
};

export default OrderService;
