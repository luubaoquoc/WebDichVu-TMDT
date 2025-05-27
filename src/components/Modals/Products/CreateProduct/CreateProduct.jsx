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
} from "./styleCreateProduct";

const CreateProductModal = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({

        product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
        product_stock: "",
        product_image: "",
        product_description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Title>Tạo sản phẩm mới</Title>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Tên sản phẩm</Label>
                        <Input
                            type="text"
                            name="product_name"
                            value={formData.product_name}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Thương hiệu</Label>
                        <Input
                            type="text"
                            name="product_brand"
                            value={formData.product_brand}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Danh mục</Label>
                        <Input
                            type="text"
                            name="product_category"
                            value={formData.product_category}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Giá</Label>
                        <Input
                            type="number"
                            name="product_price"
                            value={formData.product_price}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Số lượng tồn</Label>
                        <Input
                            type="number"
                            name="product_countInStock"
                            value={formData.product_countInStock}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Hình ảnh</Label>
                        <Input
                            type="text"
                            name="product_image"
                            value={formData.product_image}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Mô tả</Label>
                        <Input
                            type="text"
                            name="product_description"
                            value={formData.product_description}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <Button type="submit">Tạo</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default CreateProductModal;