import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProducts } from "../../services/api";
import { Breadcrumb, Container, Grid, PaginationWrapper } from './styledProductPage';
import { Pagination } from 'antd';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 16;

    const loadData = async (page = 1) => {
        try {
            const response = await getProducts(limit, page - 1); // server nhận page bắt đầu từ 0
            if (response.status === "success") {
                setProducts(response.data.data);
                setTotalPages(response.data.totalPage);
            }
        } catch (error) {
            console.error("Lỗi lấy sản phẩm:", error);
        }
    };

    useEffect(() => {
        loadData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <Breadcrumb>Trang chủ / Sản phẩm</Breadcrumb>

            <Grid>
                {products.map((item) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </Grid>
            <PaginationWrapper>
                <Pagination
                    current={currentPage}
                    total={totalPages * limit}
                    pageSize={limit}
                    onChange={handlePageChange}
                />
            </PaginationWrapper>
        </Container>
    );
};
export default ProductsPage;