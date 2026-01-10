import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slides/cartSlice";
import { getProductDetails } from "../../services/api";
import AuthForm from "../AuthPage/AuthPage";

import {
  Container,
  ImageWrapper,
  InfoWrapper,
  ProductImage,
  ProductName,
  Brand,
  Price,
  OldPrice,
  Discount,
  Description,
  BuyButton,
} from "./styledDetailsProduct";

const DetailsProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.data);
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductDetails(id);
        if (res.status === "success") {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.error("Lỗi lấy chi tiết sản phẩm:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!user?._id) {
      Swal.fire(
        "Thông báo",
        "Bạn cần đăng nhập để mua hàng!",
        "info"
      ).then(() => setIsModalOpen(true));
      return;
    }

    dispatch(
      addToCart({
        orderItem: {
          name: product.product_name,
          qty: 1,
          image: product.product_image,
          price: product.product_price,
          product_discount: product.product_discount,
          product_id: product._id,
        },
      })
    );

    Swal.fire("Thành công", "Đã thêm vào giỏ hàng", "success");
  };

  if (!product) return null;

  return (
    <Container>
      <ImageWrapper>
        <ProductImage
          src={`http://localhost:3001${product.product_image}`}
          alt={product.product_name}
        />
      </ImageWrapper>

      <InfoWrapper>
        <ProductName>{product.product_name}</ProductName>
        <Brand>Thương hiệu: {product.product_brand}</Brand>

        <Price>{product.product_price.toLocaleString()}₫</Price>

        {product.product_discount > 0 && (
          <Discount>-{product.product_discount}%</Discount>
        )}

        <Description>{product.product_description}</Description>

        <BuyButton onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </BuyButton>
      </InfoWrapper>

      <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
};

export default DetailsProduct;
