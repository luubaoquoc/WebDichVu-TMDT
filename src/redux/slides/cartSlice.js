import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  shippingAddress: {},
  paymentMethod: "",
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  user: "",
  isPaid: false,
  paidAt: "",
  isDelivered: false,
  deliveredAt: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { orderItem } = action.payload;
      const found = state.orderItems.find(
        (item) => item.product_id === orderItem.product_id
      );
      if (found) {
        found.qty += 1;
      } else {
        state.orderItems.push(orderItem);
      }
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const found = state.orderItems.find((item) => item.product_id === _id);
      if (found && quantity >= 0) {
        found.qty = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const { idProduct } = action.payload;
      state.orderItems = state.orderItems.filter(
        (item) => item.product_id !== idProduct
      );
    },
    clearCart: (state) => {
      state.orderItems = [];
    },
    loadCart: (state, action) => {
      state.orderItems = action.payload;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, loadCart } =
  cartSlice.actions;
export default cartSlice.reducer;
