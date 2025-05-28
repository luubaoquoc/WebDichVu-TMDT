import React, { useState } from "react";
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
} from "./styleCreateUser";

const CreateUserModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({

        user_name: "",
        user_email: "",
        user_phone: "",
        user_password: "",
        confirm_password: "",
        isAdmin: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
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
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone</Label>
                        <Input
                            type="text"
                            name="user_phone"
                            value={formData.user_phone}
                            onChange={handleChange}
                            required
                        />
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
                    </FormGroup>

                    <Button type="submit">Create</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default CreateUserModal;