
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, ProfileContainer, ProfileTitle, SubmitButton } from './styleProfile';
import { updateUser } from "../../services/api";



function ProfilePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_address: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/");
            return;
        }

        try {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser?.data) {
                setUser(parsedUser);
                setFormData({
                    user_name: parsedUser.data.user_name || "",
                    user_email: parsedUser.data.user_email || "",
                    user_phone: parsedUser.data.user_phone || "",
                    user_address: parsedUser.data.user_address || "",
                });
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Lỗi khi parse user từ localStorage:", error);
            navigate("/");
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await updateUser(user.data._id, formData);
            console.log(response);
            if (response.data.status === "success") {
                const updatedUser = response.data.data;
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUser(updatedUser);
                alert("Cập nhật thành công!");
            } else {
                alert("Có lỗi xảy ra!");
            }
        } catch (error) {
            console.error(error);
            alert("Lỗi khi gửi yêu cầu!");
        }
    };

    return (
        <ProfileContainer>
            <ProfileTitle>Thông tin cá nhân</ProfileTitle>
            <Form onSubmit={handleUpdate}>
                <FormGroup>
                    <Label>Họ tên:</Label>
                    <Input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Số điện thoại:</Label>
                    <Input
                        type="text"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Địa chỉ:</Label>
                    <Input
                        type="text"
                        name="user_address"
                        value={formData.user_address}
                        onChange={handleChange}
                    />
                </FormGroup>
                <SubmitButton type="submit">Cập nhật</SubmitButton>
            </Form>
        </ProfileContainer>
    );
}

export default ProfilePage;
