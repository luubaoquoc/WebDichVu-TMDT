import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { VTitle, VVerifyButton, VVerifyContainer } from "./style";
import AuthForm from "../AuthPage/AuthPage";


const VerifyEmail = () => {
  const [params] = useSearchParams();
  const [showLogin, setShowLogin] = useState(false);

  console.log(params.get("token"));

  const handlerXacThuc = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/user/verify-email?token=${params.get(
          "token"
        )}`
      );
      console.log("Response:", response.data);
      if (response.data.status === "success") {
        Swal.fire("Thành công", "Email đã được xác thực", "success");
        setShowLogin(true);
      } else {
        Swal.fire("Lỗi", "Xác thực không hợp lệ", "error");
      }
    } catch (error) {
      console.error("Lỗi xác thực:", error.response?.data || error.message);
      Swal.fire("Lỗi", error.response?.data?.message || "Xác thực không hợp lệ", "error");
    }
  };

  return (
    <VVerifyContainer>
      <VTitle>Xác thực email...</VTitle>
      <div>
        <VVerifyButton onClick={handlerXacThuc}>
          Xác thực
        </VVerifyButton>
      </div>
      <AuthForm visible={showLogin} onClose={() => setShowLogin(false)} />
    </VVerifyContainer>
  );
};

export default VerifyEmail;
