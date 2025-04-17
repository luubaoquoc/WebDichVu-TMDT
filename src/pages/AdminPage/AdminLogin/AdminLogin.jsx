import React, { useState } from "react";
import Swal from "sweetalert2";
import { loginUser } from "../../../services/api"; // chỉnh theo cấu trúc project của bạn
import { Button, Input, LoginBox, Wrapper } from "./styleAdminLogin";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        user_email: "",
        user_password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            const userData = response.data.data;

            console.log("userdata", userData)
            if (response.data.status === "success" && userData.data.isAdmin) {
                localStorage.setItem("user", JSON.stringify(userData));
                Swal.fire("Đăng nhập thành công!", "", "success").then(() => {
                    window.location.href = "/admin-dashboard";
                });
            } else {
                Swal.fire("Lỗi", "Tài khoản không có quyền truy cập Admin!", "error");
            }
        } catch (error) {
            Swal.fire("Lỗi", "Đăng nhập thất bại!", "error");
        }
    };

    return (
        <Wrapper>
            <LoginBox onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="user_password"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Đăng nhập</Button>
            </LoginBox>
        </Wrapper>
    );
};

export default AdminLogin;