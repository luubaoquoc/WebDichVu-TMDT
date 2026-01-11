import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import IntroducePage from "../pages/IntroducePage/IntroducePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import OrderService from "../pages/ServicePage/OrderService/OrderService";
import HygienicsuctionService from "../pages/ServicePage/hygienicsuctionService/hygienicsuctionService";
import InstallationService from "../pages/ServicePage/InstallationService/InstallationService";
import ProfilePage from "../pages/Profile/ProfilePage";
import MyOrderService from "../pages/ServicePage/MyOrderService/MyOrderService";
import AdminDashBoard from "../pages/AdminPage/AdminDashBoard/Admin-DashBoard";
import AdminLogin from "../pages/AdminPage/AdminLogin/AdminLogin";
import ManagerUser from "../pages/AdminPage/AdminManagerUser/ManagerUser";
import AdminProducts from "../pages/AdminPage/AdminProduct/AdminProduct";
import AdminProductOrder from "../pages/AdminPage/AdminProductOrder/AdminProductOrder";
import AdminServiceOrder from "../pages/AdminPage/AdminServiceOrderManagement/AdminServiceOrder";
import PlasterPaintService from "../pages/ServicePage/plasterpaintService/plasterpaintService";
import RefrigerationRepairService from "../pages/ServicePage/refrigerationrepairService/refrigerationrepairService";
import WaterAndElectricityInstallationService from "../pages/ServicePage/waterandelectricityinstallationService/waterandelectricityinstallationService";
import WaterAndElectricityRepairService from "../pages/ServicePage/waterandelectricityrepairservice/waterandelectricityrepairservice";
import PipelineProcessingService from "../pages/ServicePage/pipelineprocessingService/pipelineprocessingService";
import UncloggingDrainService from "../pages/ServicePage/uncloggingdrainService/uncloggingdrainService";
import CleanAndTidyService from "../pages/ServicePage/waterandelectricityrepairservice/cleanandtidy";
import WaterproofingFloorCoveringService from "../pages/ServicePage/waterandelectricityrepairservice/waterproofingfloorcovering";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import DetailsProduct from "../pages/DetailsProduct/DetailsProduct";
import VerifyEmail from "../pages/VerifyRegister/VerifyEmail";

export const routers = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/verify-email",
    page: VerifyEmail,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/details-product/:id",
    page: DetailsProduct,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/checkout",
    page: CheckoutPage,
    isShowHeader: true,
  },
  {
    path: "/introduce",
    page: IntroducePage,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: ContactPage,
    isShowHeader: true,
  },
  {
    path: "/news",
    page: NewsPage,
    isShowHeader: true,
  },
  {
    path: "/orderservice",
    page: OrderService,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "/hygienicsuctionservice",
    page: HygienicsuctionService,
    isShowHeader: true,
  },
  {
    path: "/installationservice",
    page: InstallationService,
    isShowHeader: true,
  },
  {
    path: "/refrigerationrepairservice",
    page: RefrigerationRepairService,
    isShowHeader: true,
  },
  {
    path: "/waterandelectricityinstallationservice",
    page: WaterAndElectricityInstallationService,
    isShowHeader: true,
  },
  {
    path: "/waterandelectricityrepairservice",
    page: WaterAndElectricityRepairService,
    isShowHeader: true,
  },
  {
    path: "/pipelineprocessingservice",
    page: PipelineProcessingService,
    isShowHeader: true,
  },
  {
    path: "/plasterpaintservice",
    page: PlasterPaintService,
    isShowHeader: true,
  },
  {
    path: "/uncloggingdrainservice",
    page: UncloggingDrainService,
    isShowHeader: true,
  },

  {
    path: "/clean-and-tidy-service",
    page: CleanAndTidyService,
    isShowHeader: true,
  },

  {
    path: "/waterproofing-floor-covering-service",
    page: WaterproofingFloorCoveringService,
    isShowHeader: true,
  },

  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/my-order-service",
    page: MyOrderService,
    isShowHeader: true,
  },
  {
    path: "/admin",
    page: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    page: AdminDashBoard,
  },
  {
    path: "/admin/manager-user",
    page: ManagerUser,
  },
  {
    path: "/admin/products",
    page: AdminProducts,
  },
  {
    path: "/admin/manager-service-order",
    page: AdminServiceOrder,
  },

  {
    path: "/admin/manager-product-order",
    page: AdminProductOrder,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
