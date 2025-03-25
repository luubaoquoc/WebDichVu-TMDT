import HomePage from "../pages/HomePage/HomePage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import IntroducePage from "../pages/IntroducePage/IntroducePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import NewsPage from "../pages/NewsPage/NewsPage"
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
        path: "/introduce",
        page: IntroducePage,
        isShowHeader: true
    },
    {
        path: "/contact",
        page: ContactPage,
        isShowHeader: true
    },
    {
        path: "/news",
        page: NewsPage,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFoundPage
    }
]

