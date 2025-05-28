import React, { useEffect, useState } from "react";
import { updateUser, getUserDetails } from "../../../../services/api";
import {
    Button,
    CheckboxLabel,
    CheckboxWrapper,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Title,
    ModalBackground,
    ModalContent,
    CloseButton,
} from "./styleEditUser";

const EditUserModal = ({ userId, isOpen, onClose, onUpdateSuccess }) => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_address: "",
        isAdmin: false,
    });

    useEffect(() => {
        if (isOpen) {
            getUserDetails(userId)
                .then((res) => {
                    if (res.data.status === "success") {
                        const userData = res.data.data;
                        setUser(userData);
                        setFormData({
                            user_name: userData.data.user_name || "",
                            user_email: userData.data.user_email || "",
                            user_phone: userData.data.user_phone || "",
                            user_address: userData.data.user_address || "",
                            isAdmin: userData.data.isAdmin || false,
                        });
                    } else {
                        console.error("Không lấy được thông tin người dùng.");
                    }
                })
                .catch((err) => console.error("Lỗi API:", err));
        }
    }, [isOpen, userId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateUser(userId, formData);
            if (res.data.status === "success") {
                alert("Cập nhật thành công!");
                if (onUpdateSuccess) onUpdateSuccess();
                onClose();
            } else {
                alert("Có lỗi xảy ra khi cập nhật.");
            }
        } catch (err) {
            console.error("Cập nhật thất bại:", err);
        }
    };

    if (!isOpen) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {!user ? (
                    <p>Đang tải dữ liệu người dùng...</p>
                ) : (
                    <Container>
                        <Title>Chỉnh sửa người dùng</Title>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="user_name">Họ tên:</Label>
                                <Input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="user_email">Email:</Label>
                                <Input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="user_phone">Số điện thoại:</Label>
                                <Input
                                    type="text"
                                    id="user_phone"
                                    name="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="user_address">Địa chỉ:</Label>
                                <Input
                                    type="text"
                                    id="user_address"
                                    name="user_address"
                                    value={formData.user_address}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <CheckboxWrapper>
                                <Input
                                    type="checkbox"
                                    id="isAdmin"
                                    name="isAdmin"
                                    checked={formData.isAdmin}
                                    onChange={handleChange}
                                />
                                <CheckboxLabel htmlFor="isAdmin">Là Admin</CheckboxLabel>
                            </CheckboxWrapper>

                            <Button type="submit">Lưu thay đổi</Button>
                        </Form>
                    </Container>
                )}
            </ModalContent>
        </ModalBackground>
    );
};

export default EditUserModal;
