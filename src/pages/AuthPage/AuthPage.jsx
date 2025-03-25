import React, { useState } from "react";
import { Modal, Checkbox } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { FormWrapper, LoginButton, SocialLogin, StyledInput } from "./Auth";

const AuthForm = ({ visible, onClose }) => {
    const [isRegister, setIsRegister] = useState(false); // Toggle giữa Login & Register
  
    return (
      <Modal open={visible} onCancel={onClose} footer={null} centered>
        <FormWrapper>
          <h1>{isRegister ? "REGISTER" : "LOGIN"}</h1>
          
          
          
          <StyledInput placeholder="UserName" />
          {isRegister && <StyledInput placeholder="Phone" />}
          <StyledInput type="password" placeholder="Password" />
          
          {!isRegister && (
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <Checkbox>Remember Password</Checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          )}
          
          <LoginButton>{isRegister ? "REGISTER" : "LOGIN"}</LoginButton>
          
          {!isRegister && <p>Chưa có tài khoản? <a onClick={() => setIsRegister(true)}>Đăng ký</a></p>}
          {isRegister && <p>Đã có tài khoản? <a onClick={() => setIsRegister(false)}>Đăng nhập</a></p>}
  
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