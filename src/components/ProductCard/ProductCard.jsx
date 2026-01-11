import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  Brand,
  BuyButton,
  Card,
  DiscountBadge,
  Image,
  OldPrice,
  Price,
  ProductName,
} from "./styledProductCart";
import AuthForm from "../../pages/AuthPage/AuthPage";
import { addToCart } from "../../redux/slides/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Biến để theo dõi trạng thái loading
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.data);
      } catch (error) {
        console.error("Lỗi khi parse JSON từ localStorage:", error);
      }
    }
    setLoading(false); // Dữ liệu đã tải xong
  }, []);
  if (loading) {
    return null; // Tránh render khi dữ liệu chưa load xong
  }

  const handleAddOrderProduct = () => {
    if (!user?._id) {
      Swal.fire(
        "Nhắc nhở!",
        "Bạn phải đăng nhập trước khi mua hàng!",
        "info"
      ).then(() => {
        setIsModalOpen(true);
      });
    } else {
      dispatch(
        addToCart({
          orderItem: {
            name: product?.product_name,
            qty: 1,
            image: product?.product_image,
            price: product?.product_price,
            product_discount: product?.product_discount,
            product_id: product?._id,
          },
        })
      );
    }
  };

  return (
    <Card>
      <DiscountBadge>-{product.product_discount}%</DiscountBadge>
      <Image
        onClick={() => navigate(`/details-product/${product._id}`)}
        src={`http://localhost:3001${product.product_image}`}
        alt={product.name}
      />
      <Brand>{product.product_brand}</Brand>
      <ProductName>{product.product_name}</ProductName>
      <Price>{product.product_price.toLocaleString()}₫</Price>
      {product.oldPrice && (
        <OldPrice>{product.oldPrice.toLocaleString()}₫</OldPrice>
      )}
      <BuyButton onClick={handleAddOrderProduct}>MUA NGAY</BuyButton>
      <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Card>
  );
};

export default ProductCard;
