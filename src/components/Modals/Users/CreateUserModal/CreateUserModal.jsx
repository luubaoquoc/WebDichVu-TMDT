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
} from "./styleCreateUser";
import { validateRegister } from "../../../../utils/validateRegister";

const CreateUserModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({

        user_name: "",
        user_email: "",
        user_phone: "",
        user_password: "",
        confirm_password: "",
        isAdmin: false,
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = validateRegister(formData);
        if (!validation.valid) {
            setErrors(validation.errors);
            return;
        }
        const result = await onSubmit(formData);
        if (!result.success) {
            if (result.message.includes("tồn tại")) {
                setErrors((prev) => ({
                    ...prev,
                    user_email: result.message, // hoặc user_name nếu backend kiểm tra tên
                }));
            } else {
                Swal.fire("Lỗi", result.message, "error");
            }
            return;
        }
        setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_password: "",
            confirm_password: "",
        });
        onClose();
    };

    if (!isOpen) return null;
    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Title>Create new user</Title>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                        {errors.user_name && <ErrorMessage>{errors.user_name}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="text"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                        {errors.user_email && <ErrorMessage>{errors.user_email}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="user_password"
                            value={formData.user_password}
                            onChange={handleChange}
                            required
                        />
                        {errors.user_password && <ErrorMessage>{errors.user_password}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                            type="password"
                            name="confirm_password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirm_password && <ErrorMessage>{errors.confirm_password}</ErrorMessage>}
                    </FormGroup>

                    <Button type="submit">Create</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default CreateUserModal;