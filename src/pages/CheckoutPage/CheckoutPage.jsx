import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";
import { useState } from "react";
import Swal from "sweetalert2";

import { clearCart } from "../../redux/slides/cartSlice";
import { createOrder } from "../../services/api";
import {
  CheckoutContainer,
  CheckoutForm,
  SectionTitle,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  OrderSummary,
  OrderTitle,
  OrderTable,
  OrderTotalRow,
  PlaceOrderButton,
  PaymentNote,
  OrderBack,
} from "./styleCheckout";

function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.orderItems);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 30000;
  const total = subtotal + shipping;

  // State cho form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Xử lý đặt hàng
  const handlePlaceOrder = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.city ||
      !form.address
    ) {
      Swal.fire(
        "Thiếu thông tin!",
        "Vui lòng điền đầy đủ thông tin.",
        "warning"
      );
      return;
    }
    try {
      const orderData = {
        orderItems: cart,
        shippingAddress: {
          fullName: form.name,
          email: form.email,
          phoneNumber: form.phone,
          city: form.city,
          address: form.address,
          note: form.note,
        },
        itemsPrice: subtotal,
        shippingPrice: shipping,
        totalPrice: total,
        paymentMethod: "COD",
      };
      await createOrder(orderData);
      dispatch(clearCart()); // Xóa giỏ hàng sau khi đặt hàng thành công
      Swal.fire({
        title: "Đặt hàng thành công!",
        html: `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <img src="assets/gifs/cart-gif.gif" alt="cart animation" style="width:50px; margin-bottom: 12px;" />
            <div>Đơn đặt hàng của bạn đã được gửi đi!</div>
          </div>
        `,
        icon: "success",
        showConfirmButton: true,
        confirmButtonText: "Tiếp tục mua sắm",
      }).then(() => {
        navigate("/products");
      });
    } catch (error) {
      Swal.fire("Lỗi!", "Đặt hàng thất bại!", "error");
    }
  };

  return (
    <CheckoutContainer>
      <CheckoutForm>
        <SectionTitle>THÔNG TIN THANH TOÁN</SectionTitle>
        <FormRow>
          <FormGroup>
            <Label>Họ và tên *</Label>
            <Input
              name="name"
              placeholder="Nhập họ và tên"
              required
              value={form.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Địa chỉ email *</Label>
            <Input
              name="email"
              type="email"
              placeholder="Nhập địa chỉ Email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Số điện thoại *</Label>
            <Input
              name="phone"
              placeholder="Nhập số điện thoại"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Tỉnh/Thành phố *</Label>
            <Select
              name="city"
              required
              value={form.city}
              onChange={handleChange}
            >
              <option value="">Chọn một tuỳ chọn...</option>
              <option>An Giang</option>
              <option>Bà Rịa - Vũng Tàu</option>
              <option>Bắc Giang</option>
              <option>Bắc Kạn</option>
              <option>Bạc Liêu</option>
              <option>Bắc Ninh</option>
              <option>Bến Tre</option>
              <option>Bình Định</option>
              <option>Bình Dương</option>
              <option>Bình Phước</option>
              <option>Bình Thuận</option>
              <option>Cà Mau</option>
              <option>Cần Thơ</option>
              <option>Cao Bằng</option>
              <option>Đà Nẵng</option>
              <option>Đắk Lắk</option>
              <option>Đắk Nông</option>
              <option>Điện Biên</option>
              <option>Đồng Nai</option>
              <option>Đồng Tháp</option>
              <option>Gia Lai</option>
              <option>Hà Giang</option>
              <option>Hà Nam</option>
              <option>Hà Nội</option>
              <option>Hà Tĩnh</option>
              <option>Hải Dương</option>
              <option>Hải Phòng</option>
              <option>Hậu Giang</option>
              <option>Hòa Bình</option>
              <option>Hưng Yên</option>
              <option>Khánh Hòa</option>
              <option>Kiên Giang</option>
              <option>Kon Tum</option>
              <option>Lai Châu</option>
              <option>Lâm Đồng</option>
              <option>Lạng Sơn</option>
              <option>Lào Cai</option>
              <option>Long An</option>
              <option>Nam Định</option>
              <option>Nghệ An</option>
              <option>Ninh Bình</option>
              <option>Ninh Thuận</option>
              <option>Phú Thọ</option>
              <option>Phú Yên</option>
              <option>Quảng Bình</option>
              <option>Quảng Nam</option>
              <option>Quảng Ngãi</option>
              <option>Quảng Ninh</option>
              <option>Quảng Trị</option>
              <option>Sóc Trăng</option>
              <option>Sơn La</option>
              <option>Tây Ninh</option>
              <option>Thái Bình</option>
              <option>Thái Nguyên</option>
              <option>Thanh Hóa</option>
              <option>Thừa Thiên Huế</option>
              <option>Tiền Giang</option>
              <option>TP Hồ Chí Minh</option>
              <option>Trà Vinh</option>
              <option>Tuyên Quang</option>
              <option>Vĩnh Long</option>
              <option>Vĩnh Phúc</option>
              <option>Yên Bái</option>
            </Select>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Địa chỉ *</Label>
          <Input
            name="address"
            placeholder="Toà nhà, số nhà, tên đường"
            required
            value={form.address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Ghi chú đơn hàng (tuỳ chọn)</Label>
          <Textarea
            name="note"
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            value={form.note}
            onChange={handleChange}
          />
        </FormGroup>
      </CheckoutForm>
      <OrderSummary>
        <OrderBack onClick={() => navigate("/cart")}>
          <RollbackOutlined style={{ marginRight: "2px" }} />
          Quay lại giỏ hàng
        </OrderBack>
        <OrderTitle>ĐƠN HÀNG CỦA BẠN</OrderTitle>
        <OrderTable>
          <thead>
            <tr>
              <th>SẢN PHẨM</th>
              <th style={{ textAlign: "right" }}>TẠM TÍNH</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx}>
                <td>
                  {item.name} <b>× {item.qty}</b>
                </td>
                <td style={{ textAlign: "right" }}>
                  {item.price.toLocaleString()}₫
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ fontWeight: 600 }}>Tạm tính</td>
              <td style={{ textAlign: "right" }}>
                {subtotal.toLocaleString()}₫
              </td>
            </tr>
            <tr>
              <td>Phí Giao hàng</td>
              <td style={{ textAlign: "right" }}>30,000₫</td>
            </tr>
            <OrderTotalRow>
              <td>Tổng</td>
              <td style={{ textAlign: "right" }}>{total.toLocaleString()}₫</td>
            </OrderTotalRow>
          </tbody>
        </OrderTable>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>
          Trả tiền mặt khi nhận hàng (COD)
        </div>
        <PaymentNote>Trả tiền mặt khi nhận hàng</PaymentNote>
        <PlaceOrderButton onClick={handlePlaceOrder}>ĐẶT HÀNG</PlaceOrderButton>
      </OrderSummary>
    </CheckoutContainer>
  );
}

export default CheckoutPage;
