import HomePage from "../pages/HomePage/HomePage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
 export const routers = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true
    },
    {
        path: "/products",
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFoundPage
    }
]

