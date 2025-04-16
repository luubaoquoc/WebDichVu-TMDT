import HomePage from "../pages/HomePage/HomePage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import IntroducePage from "../pages/IntroducePage/IntroducePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import NewsPage from "../pages/NewsPage/NewsPage"
import OrderService from "../pages/ServicePage/OrderService/OrderService"
import RepairService from "../pages/ServicePage/RepairService/RepairService"
import InstallationService from "../pages/ServicePage/InstallationService/InstallationService"
import ProfilePage from "../pages/Profile/ProfilePage"
import AdminPage from "../pages/AdminPage/AdminPage"

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
        path: "/orderservice",
        page: OrderService,
        isShowHeader: true
    },
    {
        path: "/repairservice",
        page: RepairService,
        isShowHeader: true
    },
    {
        path: "/installationservice",
        page: InstallationService,
        isShowHeader: true
    },
    {
        path: "/profile-user",
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: "/admin",
        page: AdminPage,
        isShowHeader: true,
        isPrivate: true
    },
    {
        path: "*",
        page: NotFoundPage
    }
]

