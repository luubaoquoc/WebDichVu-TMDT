import React, { useEffect, useState } from "react";
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
} from "./styleCreateProduct";
import { getProductDetails, updateProduct } from "../../../../services/api";

const EditProductModal = ({ onClose, productId, onUpdate }) => {
    const [formData, setFormData] = useState({
        product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
        product_countInStock: "",
        product_image: "",
        product_description: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductDetails(productId);
                console.log("Product data:", data);
                setFormData({
                    product_name: data.data.data.product_name || "",
                    product_brand: data.data.data.product_brand || "",
                    product_category: data.data.data.product_category || "",
                    product_price: data.data.data.product_price || "",
                    product_countInStock: data.data.data.product_countInStock || "",
                    product_image: data.data.data.product_image || "",
                    product_description: data.data.data.product_description || "",
                });
            } catch (error) {
                Swal.fire("Lỗi", "Không thể tải dữ liệu sản phẩm.", "error");
            }
        };

        if (productId) fetchData();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const result = await updateProduct(productId, formData);

            if (result.status === "success") {
                Swal.fire("Thành công!", "Cập nhật sản phẩm thành công!", "success");
                onUpdate?.();
                onClose();
            } else {
                Swal.fire("Lỗi", result.message || "Cập nhật thất bại", "error");
            }
        } catch (error) {
            Swal.fire("Lỗi", "Đã xảy ra lỗi khi cập nhật!", "error");
        }
    };

    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Title>Edit product</Title>
                <Form onSubmit={handleSubmit}>
                    {/* Các input như cũ */}
                    <FormGroup>
                        <Label>Product Name</Label>
                        <Input
                            type="text"
                            name="product_name"
                            value={formData.product_name}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Brand</Label>
                        <Input
                            type="text"
                            name="product_brand"
                            value={formData.product_brand}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Category</Label>
                        <Input
                            type="text"
                            name="product_category"
                            value={formData.product_category}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Price</Label>
                        <Input
                            type="number"
                            name="product_price"
                            value={formData.product_price}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Stock Quantity</Label>
                        <Input
                            type="number"
                            name="product_countInStock"
                            value={formData.product_countInStock}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Image</Label>
                        <Input
                            type="text"
                            name="product_image"
                            value={formData.product_image}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            name="product_description"
                            value={formData.product_description}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    {/* Các form group khác giống như CreateProductModal */}
                    <Button type="submit">Update</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default EditProductModal;
