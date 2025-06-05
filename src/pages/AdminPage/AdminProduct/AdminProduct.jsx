// src/pages/AdminPage/AdminProducts/AdminProducts.jsx
import React, { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct } from "../../../services/api";
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
import EditProductModal from "../../../components/Modals/Products/CreateProduct/EditProduct";
import ConfirmDeleteModal from "../../../components/Modals/Products/CreateProduct/deleteProduct";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

    const fetchProducts = async () => {
        try {
            const res = await getProducts(50, 0); // lấy 50 sản phẩm
            setProducts(res.data.data || []);
            console.log("Danh sách sản phẩm:", res.data.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        }
    };
    useEffect(() => {
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
    const handleEditProduct = (productId) => {
        setSelectedProductId(productId);
        setShowEditModal(true);
    };

    const confirmDeleteProduct = (productId) => {
        setProductIdToDelete(productId);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirmed = async () => {
        try {
            const res = await deleteProduct(productIdToDelete);
            if (res.data.status === "success") {
                setProducts((prev) => prev.filter((p) => p._id !== productIdToDelete));
            }
        } catch (err) {
            console.error("Lỗi khi xóa sản phẩm:", err);
        } finally {
            setShowDeleteModal(false);
            setProductIdToDelete(null);
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
                            <Th>Discount</Th>
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
                                <Td>{product.product_discount}%</Td>
                                <Td>
                                    <img
                                        src={`http://localhost:3001${product.product_image}`}
                                        alt={product.product_name}
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </Td>
                                <Td>
                                    <ActionButton onClick={() => handleEditProduct(product._id)}>Edit</ActionButton>
                                    <ActionButton danger onClick={() => confirmDeleteProduct(product._id)}>Delete</ActionButton>
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
                {showEditModal && (
                    <EditProductModal
                        onClose={() => setShowEditModal(false)}
                        productId={selectedProductId}
                        onUpdate={fetchProducts}
                    />
                )}
                {showDeleteModal && (
                    <ConfirmDeleteModal
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={handleDeleteConfirmed}
                    />
                )}
            </Container>
        </AdminLayout>
    );
};

export default AdminProducts;
