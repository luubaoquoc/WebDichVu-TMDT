import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MehTwoTone } from "@ant-design/icons";
import { Button } from "antd";

import { updateQuantity, removeFromCart } from "../../redux/slides/cartSlice";
import {
  ApplyCouponButton,
  Breadcrumb,
  CartEmptyNotify,
  CartEmptyWrapper,
  CartWrapper,
  CheckoutButton,
  CouponBox,
  CouponInput,
  CouponTitle,
  PageContainer,
  ProductImage,
  ProductList,
  ProductName,
  ProductPrice,
  ProductTable,
  ProductTotal,
  QuantityBox,
  QuantityButton,
  QuantityInput,
  RemoveButton,
  SummaryBox,
  SummaryRow,
  SummaryTitle,
  SummaryTotal,
  Td,
  TdInfo,
  Th,
} from "./styleCart";
import AuthForm from "../../pages/AuthPage/AuthPage";
import Swal from "sweetalert2";

function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Biến để theo dõi trạng thái loading
  const cart = useSelector((state) => state.cart.orderItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user:", storedUser); // Kiểm tra giá trị của storedUser
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed user:", parsedUser); // Kiểm tra giá trị của parsedUser
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

  const handleGoToPaymentOrder = () => {
    if (!user?._id) {
      Swal.fire(
        "Nhắc nhở!",
        "Bạn phải đăng nhập trước khi mua hàng!",
        "info"
      ).then(() => {
        setIsModalOpen(true);
      });
    } else {
      navigate("/checkout");
    }
  };

  const onChangeQty = (e, item) => {
    const value = Number(e.target.value);
    if (value <= 0) {
      dispatch(
        removeFromCart({
          idProduct: item.product_id,
        })
      );
    } else {
      dispatch(
        updateQuantity({
          _id: item.product_id,
          quantity: value,
        })
      );
    }
  };

  const handleChangeQty = (type, item) => {
    if (type === "increase") {
      dispatch(
        updateQuantity({
          _id: item.product_id,
          quantity: item.qty + 1,
        })
      );
    } else {
      if (item.qty <= 1) {
        dispatch(
          removeFromCart({
            idProduct: item.product_id,
          })
        );
      } else {
        dispatch(
          updateQuantity({
            _id: item.product_id,
            quantity: item.qty - 1,
          })
        );
      }
    }
  };

  const totalDiscount = cart.reduce((sum, item) => {
    if (item.product_discount && item.product_discount > 0) {
      return (
        sum + Math.round((item.price * item.product_discount * item.qty) / 100)
      );
    }
    return sum;
  }, 0);

  return (
    <PageContainer>
      <Breadcrumb>Trang chủ / Giỏ hàng</Breadcrumb>
      <CartWrapper>
        {cart.length === 0 ? (
          <CartEmptyWrapper>
            <CartEmptyNotify>
              Chưa có sản phẩm nào trong giỏ hàng.{" "}
              <MehTwoTone style={{ fontSize: "25px" }} />
            </CartEmptyNotify>
            <Button
              color="primary"
              variant="solid"
              onClick={() => navigate("/products")}
            >
              Quay lại trang sản phẩm
            </Button>
          </CartEmptyWrapper>
        ) : (
          <>
            <ProductList>
              <ProductTable>
                <thead>
                  <tr>
                    <Th></Th>
                    <Th>Sản phẩm</Th>
                    <Th>Giá</Th>
                    <Th>Số lượng</Th>
                    <Th>Thành tiền</Th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.product_id}>
                      <Td>
                        <RemoveButton
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                idProduct: item.product_id,
                              })
                            )
                          }
                        >
                          ×
                        </RemoveButton>
                      </Td>
                      <TdInfo>
                        <ProductImage
                          src={`http://localhost:3001${item.image}`}
                          alt={item.name}
                        />
                        <div>
                          <ProductName>{item.name}</ProductName>
                        </div>
                      </TdInfo>
                      <Td>
                        <ProductPrice>
                          {item.price.toLocaleString()}₫
                        </ProductPrice>
                      </Td>
                      <Td>
                        <QuantityBox>
                          <QuantityButton
                            onClick={() => handleChangeQty("decrease", item)}
                          >
                            -
                          </QuantityButton>
                          <QuantityInput
                            type="number"
                            min={0}
                            value={item.qty}
                            onChange={(e) => {
                              onChangeQty(e, item);
                            }}
                          />
                          <QuantityButton
                            onClick={() => handleChangeQty("increase", item)}
                          >
                            +
                          </QuantityButton>
                        </QuantityBox>
                      </Td>
                      <Td>
                        <ProductTotal>
                          {(item.price * item.qty).toLocaleString()}₫
                        </ProductTotal>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </ProductTable>
            </ProductList>
            <SummaryBox>
              <SummaryTitle>CỘNG GIỎ HÀNG</SummaryTitle>
              <SummaryRow>
                <span>Tạm tính</span>
                <span>
                  {cart
                    .reduce((sum, item) => sum + item.price * item.qty, 0)
                    .toLocaleString()}
                  ₫
                </span>
              </SummaryRow>
              <SummaryRow>
                <span>Giảm giá</span>
                <span>
                  {totalDiscount > 0
                    ? `-${totalDiscount.toLocaleString()}₫`
                    : "0₫"}
                </span>
              </SummaryRow>
              <SummaryRow>
                <span>Phí Giao hàng</span>
                <span>30,000₫</span>
              </SummaryRow>
              <SummaryTotal>
                <span>Tổng</span>
                <span>
                  {(
                    cart.reduce((sum, item) => sum + item.price * item.qty, 0) +
                    30000 -
                    totalDiscount
                  ).toLocaleString()}
                  ₫
                </span>
              </SummaryTotal>
              <CheckoutButton onClick={() => handleGoToPaymentOrder()}>
                TIẾN HÀNH THANH TOÁN
              </CheckoutButton>
              <CouponBox>
                <CouponTitle>Mã ưu đãi</CouponTitle>
                <CouponInput placeholder="Mã ưu đãi" />
                <ApplyCouponButton>Áp dụng</ApplyCouponButton>
              </CouponBox>
            </SummaryBox>
          </>
        )}
      </CartWrapper>
      <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageContainer>
  );
}
export default CartPage;
