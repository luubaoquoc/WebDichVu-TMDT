import { useState } from "react";
import Swal from "sweetalert2";
import { validateRegister } from "../../utils/validateRegister";
import { Modal, Checkbox } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { FormWrapper, LinkSpan, LoginButton, SocialLogin, StyledInput } from "./Auth";
import { registerUser, loginUser } from "../../services/api";

const AuthForm = ({ visible, onClose }) => {
  const [isRegister, setIsRegister] = useState(false); // Toggle giữa Login & Register
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
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
        const validation = validateRegister(formData);
        if (!validation.valid) {
          Swal.fire("Lỗi", validation.message, "warning");
          return;
        }
        const response = await registerUser(formData);
        if (response.data.status === "success") {
          Swal.fire("Thành công!", "Đăng ký thành công, Vui lòng kiểm tra email của bạn!", "success");
          setIsRegister(false); // Chuyển về form login
        } else {
          Swal.fire("Lỗi", response.data.message, "error");
        }
      } else {
        const response = await loginUser({
          user_email: formData.user_email,
          user_password: formData.user_password,
        });

        if (response.data.status === "success") {
          const userData = response.data.data;
          localStorage.setItem("user", JSON.stringify(userData));
          Swal.fire("Đăng nhập thành công!", "", "success").then(() => {
            window.location.reload();
          });
        } else {
          localStorage.removeItem("user");
          const message = response.data.message;

          // Kiểm tra message từ backend
          if (message === "User is blocked") {
            Swal.fire(
              "Tài khoản bị khóa",
              "Vui lòng liên hệ quản trị viên",
              "error"
            );
          } else if (
            message === "User not found" ||
            message === "Password is incorrect"
          ) {
            Swal.fire("Lỗi", "Email hoặc mật khẩu không đúng!", "error");
          } else {
            Swal.fire("Lỗi", message || "Đăng nhập thất bại", "error");
          }
        }
      }
    } catch (error) {
      Swal.fire("Lỗi", "Có lỗi xảy ra, vui lòng thử lại!", "error");
      console.error(error);
    }
  };
  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      <FormWrapper>
        <h1>{isRegister ? "REGISTER" : "LOGIN"}</h1>

        {isRegister && (
          <StyledInput
            name="user_name"
            placeholder="User Name..."
            onChange={handleChange}
          />
        )}
        <StyledInput
          name="user_email"
          placeholder="Email..."
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="user_password"
          placeholder="Password..."
          onChange={handleChange}
        />
        {isRegister && (
          <StyledInput
            type="password"
            name="confirm_password"
            placeholder="Confirm Password..."
            onChange={handleChange}
          />
        )}

        {!isRegister && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Checkbox>Remember Password</Checkbox>
            <a href="#forgot-password">Forgot Password?</a>
          </div>
        )}

        <LoginButton onClick={handleSubmit}>
          {isRegister ? "REGISTER" : "LOGIN"}
        </LoginButton>

        {!isRegister ? (
          <p>
            Chưa có tài khoản?{" "}
            <LinkSpan onClick={() => setIsRegister(true)}>Đăng ký</LinkSpan>
          </p>
        ) : (
          <p>
            Đã có tài khoản?{" "}
            <LinkSpan onClick={() => setIsRegister(false)}>Đăng nhập</LinkSpan>
          </p>
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
