import styled from "styled-components";
import { Input, Button} from "antd";

// Wrapper cho modal
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

// Input field
export const StyledInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
`;

// Button chính
export const LoginButton = styled(Button)`
  width: 50%;
  height: 45px;
  background-color: #003366;
  color: white;
  font-size: 16px;
  &:hover {
    background-color: #002244;
  }
`;

// Phần đăng nhập với MXH
export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;
