// src/pages/AdminPage/AdminProducts/AdminProducts.jsx
import React, { useEffect, useState } from "react";
import { getProducts, createProduct } from "../../../services/api";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
    Container,
    Title,
    Table,
    Th,
    Tr,
    Td,
    Header,
    CreateButton,
    ActionButton
} from "./styleAdminProducts";
import CreateProductModal from "../../../components/Modals/Products/CreateProduct/CreateProduct";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProducts(50, 0); // lấy 50 sản phẩm
                setProducts(res.data.data || []);
                console.log("Danh sách sản phẩm:", res.data.data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sản phẩm:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleCreateProduct = async (newProductData) => {
        try {
            const res = await createProduct(newProductData);
            console.log("Kết quả trả về khi tạo sản phẩm:", res.data);


            if (res.data.status === "success") {
                // Thêm sản phẩm mới vào danh sách hiện tại
                setProducts((prev) => [res.data.data, ...prev]);
                setShowCreateModal(false);
            } else {
                console.error("Tạo sản phẩm thất bại:", res.message);
            }
        } catch (err) {
            console.error("Lỗi khi tạo sản phẩm:", err);
        }
    };

    return (
        <AdminLayout>
            <Container>
                <Header>
                    <Title>Products Management</Title>
                    <CreateButton onClick={() => setShowCreateModal(true)}>
                        + Create new
                    </CreateButton>
                </Header>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Brand</Th>
                            <Th>Category</Th>
                            <Th>Price</Th>
                            <Th>Stock</Th>
                            <Th>Image</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <Tr key={product._id || index}>
                                <Td>{product.product_name}</Td>
                                <Td>{product.product_brand}</Td>
                                <Td>{product.product_category}</Td>
                                <Td>{product.product_price}</Td>
                                <Td>{product.product_countInStock}</Td>
                                <Td>
                                    <img
                                        src={product.product_image}
                                        alt={product.product_name}
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </Td>
                                <Td>
                                    <ActionButton>Edit</ActionButton>
                                    <ActionButton danger>Delete</ActionButton>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                {showCreateModal && (
                    <CreateProductModal
                        onClose={() => setShowCreateModal(false)}
                        onSubmit={handleCreateProduct}
                    />
                )}
            </Container>
        </AdminLayout>
    );
};

export default AdminProducts;
