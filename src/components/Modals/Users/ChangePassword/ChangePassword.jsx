import React, { useState } from "react";
import Swal from "sweetalert2";
import {
    ModalBackground,
    ModalContent,
    CloseButton,
    Title,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ErrorMessage,
} from "./styleChangPassword"; // bạn định nghĩa CSS trong file này
import { changePassword } from "../../../../services/api"; // giả sử bạn có hàm này trong api để gọi API đổi mật khẩu

const ChangePasswordModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { oldPassword, newPassword, confirmPassword } = formData;

        // Validation
        let newErrors = {};
        if (!oldPassword) newErrors.oldPassword = "Vui lòng nhập mật khẩu cũ.";
        if (!newPassword || newPassword.length < 6)
            newErrors.newPassword = "Mật khẩu mới phải ít nhất 6 ký tự.";
        if (newPassword !== confirmPassword)
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const res = await changePassword({ oldPassword, newPassword, confirmPassword });
            console.log("Response:", res);

            if (res.data?.status === "success") {
                Swal.fire("Thành công", res.data.message, "success");
                setFormData({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
                onClose(); // Đóng modal sau khi đổi mật khẩu thành công
            } else {
                Swal.fire("Lỗi", res.data?.message || "Không thể đổi mật khẩu", "error");
            }
        } catch (err) {
            console.error("Lỗi khi đổi mật khẩu:", err);
            Swal.fire("Lỗi", err.response?.data?.message || "Có lỗi xảy ra", "error");
        }
    };

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Title>Đổi mật khẩu</Title>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Mật khẩu hiện tại</Label>
                        <Input
                            type="password"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                        />
                        {errors.oldPassword && <ErrorMessage>{errors.oldPassword}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Mật khẩu mới</Label>
                        <Input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                        {errors.newPassword && <ErrorMessage>{errors.newPassword}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Xác nhận mật khẩu mới</Label>
                        <Input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                    </FormGroup>
                    <Button type="submit">Đổi mật khẩu</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default ChangePasswordModal;
