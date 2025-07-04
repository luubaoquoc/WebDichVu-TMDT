import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MehTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Row, Col, Divider } from "antd";

import { updateQuantity, removeFromCart } from "../../redux/slides/cartSlice";
import {
  ApplyCouponButton,
  Breadcrumb,
  CartDividerHide,
  CartEmptyNotify,
  CartEmptyWrapper,
  CheckoutButton,
  CouponBox,
  CouponInput,
  CouponTitle,
  PageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductTotal,
  QuantityBox,
  QuantityButton,
  QuantityInput,
  SummaryBox,
  SummaryRow,
  SummaryTitle,
  SummaryTotal,
  CustomColHead,
  ProductDetail,
  ProductInfo,
  ProductSubTotal,
  ProductQuantity,
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
    <>
      <CartDividerHide />
      <PageContainer>
        <Breadcrumb>Trang chủ / Giỏ hàng</Breadcrumb>
        <Row gutter={[16, 30]} justify="center" align={"top"}>
          {cart.length === 0 ? (
            <Col span={10}>
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
            </Col>
          ) : (
            <>
              <Col sm={24} md={24} lg={15} xl={15}>
                {/* Header */}
                <Row
                  gutter={[16, 16]}
                  align="middle"
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "0px 5px",
                  }}
                >
                  <CustomColHead
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                  ></CustomColHead>
                  <CustomColHead xs={12} sm={12} md={6} lg={10} xl={10}>
                    Sản phẩm
                  </CustomColHead>
                  <CustomColHead xs={0} sm={0} md={5} lg={4} xl={4}>
                    Giá
                  </CustomColHead>
                  <CustomColHead xs={10} sm={10} md={5} lg={4} xl={4}>
                    Số lượng
                  </CustomColHead>
                  <CustomColHead
                    xs={0}
                    sm={0}
                    md={6}
                    lg={4}
                    xl={4}
                    textAlign="right"
                  >
                    Thành tiền
                  </CustomColHead>
                </Row>
                {/* List sản phẩm */}
                {cart.map((item) => (
                  <Row
                    key={item.product_id}
                    gutter={[16, 16]}
                    align="middle"
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      padding: "12px 5px",
                    }}
                  >
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                      <Button
                        type="text"
                        danger
                        style={{ fontSize: "2rem", padding: "6px" }}
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              idProduct: item.product_id,
                            })
                          )
                        }
                      >
                        ×
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={10} xl={10}>
                      <ProductDetail>
                        <ProductImage
                          src={`http://localhost:3001${item.image}`}
                          alt={item.name}
                          style={{ width: 60, height: 60, objectFit: "cover" }}
                        />
                        <ProductInfo>
                          <ProductName>{item.name}</ProductName>
                          <ProductSubTotal className="hide-mobile">
                            <ProductQuantity>{item.qty}</ProductQuantity> x
                            <ProductPrice>
                              {item.price.toLocaleString()}₫
                            </ProductPrice>
                          </ProductSubTotal>
                        </ProductInfo>
                      </ProductDetail>
                    </Col>
                    <Col xs={0} sm={0} md={5} lg={4} xl={4}>
                      <ProductPrice>
                        {item.price.toLocaleString()}₫
                      </ProductPrice>
                    </Col>
                    <Col xs={10} sm={10} md={5} lg={4} xl={4}>
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
                    </Col>
                    <Col xs={0} sm={0} md={6} lg={4} xl={4}>
                      <ProductTotal>
                        {(item.price * item.qty).toLocaleString()}₫
                      </ProductTotal>
                    </Col>
                  </Row>
                ))}
              </Col>
              <Col
                className="cart-divider"
                xs={0}
                sm={0}
                md={0}
                lg={1}
                xl={1}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Divider
                  type="vertical"
                  style={{ height: "100%", minHeight: 400, margin: 0 }}
                />
              </Col>
              <Col sm={24} md={24} lg={8} xl={8}>
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
                        cart.reduce(
                          (sum, item) => sum + item.price * item.qty,
                          0
                        ) +
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
              </Col>
            </>
          )}
        </Row>
        <AuthForm visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </PageContainer>
    </>
  );
}
export default CartPage;
