
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, ProfileContainer, ProfileTitle, SubmitButton } from './styleProfile';
import { updateUser } from "../../services/api";
import ChangePasswordModal from "../../components/Modals/Users/ChangePassword/ChangePassword";



function ProfilePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_address: "",
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/");
            return;
        }

        try {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser) {
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
            console.log("Update response:", response);

            if (response.data.status === "success") {
                // Lấy user cũ từ localStorage để giữ lại token
                const oldUser = JSON.parse(localStorage.getItem("user"));

                // Tạo object user mới: giữ token, cập nhật data
                const updatedUser = {
                    ...oldUser,
                    ...response.data.data

                };

                // Cập nhật localStorage và state
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUser(updatedUser);

                Swal.fire("Thành công!", "Cập nhật thành công!", "success");
            } else {
                Swal.fire("Lỗi", "Có lỗi xảy ra khi cập nhật.", "error");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Lỗi", "Lỗi khi gửi yêu cầu!", "error");
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
                <div style={{ display: "flex", gap: "10px" }}>
                    <SubmitButton type="submit">Cập nhật</SubmitButton>
                    <button
                        type="button"
                        onClick={() => setShowModal(true)}
                        style={{ backgroundColor: "#eee", padding: "8px", borderRadius: "5px", border: "none" }}
                    >
                        Đổi mật khẩu
                    </button>
                </div>
            </Form>
            <ChangePasswordModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </ProfileContainer>
    );
}

export default ProfilePage;
