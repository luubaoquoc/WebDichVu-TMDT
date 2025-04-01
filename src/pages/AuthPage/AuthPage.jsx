import React, { useState } from "react";
import { Modal, Checkbox, message } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { FormWrapper, LoginButton, SocialLogin, StyledInput } from "./Auth";
import { registerUser, loginUser } from "../../services/api";

const AuthForm = ({ visible, onClose }) => {
    const [isRegister, setIsRegister] = useState(false); // Toggle giữa Login & Register
    const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      user_phone: "",
      user_password: "",
      confirm_password: "",
    });

    // Hàm xử lý khi nhập liệu
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Hàm xử lý Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        const response = await registerUser(formData);
        if (response.data.status === "success") {
          message.success("Đăng ký thành công!");
          setIsRegister(false); // Chuyển về form login
        } else {
          message.error(response.data.message);
        }
      } else {
        const response = await loginUser({
          user_email: formData.user_email,
          user_password: formData.user_password,
        });
        console.log("Response from loginUser:", response);
        if (response.data.status === "success") {
          console.log("response.data:", response.data);
          console.log("response.data.data:", response.data.data);
          localStorage.setItem("user", JSON.stringify(response.data.data)); // Lưu user vào localStorage
          message.success("Đăng nhập thành công!");
          window.location.reload(); // Load lại trang để cập nhật giao diện
          onClose();
        } else {
          localStorage.removeItem("user"); // Xóa user khỏi localStorage nếu có
          message.error("Email hoặc mật khẩu không đúng!");
        }
      }
    } catch (error) {
      message.error("Có lỗi xảy ra, vui lòng thử lại!");
      console.error(error);
    }
  };
  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      <FormWrapper>
        <h1>{isRegister ? "REGISTER" : "LOGIN"}</h1>

        {isRegister && <StyledInput name="user_name" placeholder="User Name" onChange={handleChange} />}
        <StyledInput name="user_email" placeholder="Email" onChange={handleChange} />
        {isRegister && <StyledInput name="user_phone" placeholder="Phone" onChange={handleChange} />}
        <StyledInput type="password" name="user_password" placeholder="Password" onChange={handleChange} />
        {isRegister && (
          <StyledInput type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} />
        )}

        {!isRegister && (
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Checkbox>Remember Password</Checkbox>
            <a href="#">Forgot Password?</a>
          </div>
        )}

        <LoginButton onClick={handleSubmit}>{isRegister ? "REGISTER" : "LOGIN"}</LoginButton>

        {!isRegister ? (
          <p>Chưa có tài khoản? <a onClick={() => setIsRegister(true)}>Đăng ký</a></p>
        ) : (
          <p>Đã có tài khoản? <a onClick={() => setIsRegister(false)}>Đăng nhập</a></p>
        )}

        <p>or</p>
        <SocialLogin>
          <GoogleOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
          <FacebookOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
        </SocialLogin>
      </FormWrapper>
    </Modal>
  );
  };
  
  export default AuthForm;