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
        product_discount: 0,
        product_image: "", // đây sẽ lưu ảnh File nếu có chọn mới
        product_description: "",
    });

    const [previewImage, setPreviewImage] = useState(""); // để hiển thị ảnh preview

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductDetails(productId);
                const product = data.data.data;
                setFormData({
                    product_name: product.product_name || "",
                    product_brand: product.product_brand || "",
                    product_category: product.product_category || "",
                    product_price: product.product_price || "",
                    product_countInStock: product.product_countInStock || "",
                    product_discount: product.product_discount || 0,
                    product_image: "", // reset khi edit, ảnh cũ chỉ để preview
                    product_description: product.product_description || "",
                });
                setPreviewImage(product.product_image || "");
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, product_image: file }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // base64 preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("product_name", formData.product_name);
            data.append("product_brand", formData.product_brand);
            data.append("product_category", formData.product_category);
            data.append("product_price", formData.product_price);
            data.append("product_countInStock", formData.product_countInStock);
            data.append("product_discount", formData.product_discount);
            data.append("product_description", formData.product_description);

            if (formData.product_image) {
                data.append("product_image", formData.product_image); // ảnh mới nếu có
            }

            const result = await updateProduct(productId, data);

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
                        <Label>Discount</Label>
                        <Input
                            type="number"
                            name="product_discount"
                            value={formData.product_discount}
                            onChange={handleChange}
                            min="0"
                            max="100"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Image</Label>
                        {previewImage && (
                            <div style={{ marginBottom: "10px" }}>
                                <img
                                    src={
                                        previewImage.startsWith("data:")
                                            ? previewImage
                                            : `http://localhost:3001${previewImage}`
                                    }
                                    alt="preview"
                                    style={{ width: "100px", borderRadius: "6px" }}
                                />
                            </div>
                        )}
                        <Input
                            type="file"
                            name="product_image"
                            accept="image/*"
                            onChange={handleImageChange}
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

                    <Button type="submit">Update</Button>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default EditProductModal;
