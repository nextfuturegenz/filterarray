import { createBrowserRouter } from "react-router-dom";
import {
    Homepage,
    Blog,
    BlogDetail,
    About,
    Contact,
    FAQ,
    TNC,
    Login,
    Dashboard,
    Customers,
    Reports,
    PosSalesPanel,
    Inventory,
    Categories,
    Attributes,
    Products,
    AccessControl,
    Documentation,
    Employees,
    Suppliers,
    PurchaseOrder,
    SaleOrder,
    Register,
    Services
} from '../pages';
import {
    AppLayout,
    HomeLayout,
} from '../layout';
import ProtectedRoute from "./protectedRoutes";

const appChildRoutes = [
    {
        path: "dashboard",
        index : true,
        element: <Dashboard />,
    },
    {
        path: "customers",
        element: <Customers />,
    },
    {
        path: "report/:type",
        element: <Reports />,
    },
    {
        path: "pos-sales-panel",
        element: <PosSalesPanel />,
    },
    {
        path: "inventory",
        element: <Inventory />,
        children : [
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "attributes",
                element: <Attributes />,
            },
            {
                path: "products",
                element: <Products />,
            },
        ]
    },
    {
        path: "access-control",
        element: <AccessControl />,
    },
    {
        path: "documentation",
        element: <Documentation />,
    },
    {
        path: "employees/:action",
        element: <Employees />,
    },
    {
        path: "suppliers",
        element: <Suppliers />,
    },
    {
        path: "purchase-orders",
        element: <PurchaseOrder />,
    },
    {
        path: "sale-orders",
        element: <SaleOrder />,
    },
]

const homeChildRoutes = [
    {
        index: true,
        element: <Homepage />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "blogs",
        element: <Blog />,
    },
    {
        path: "blog/:slag",
        element: <BlogDetail />,
    },
    {
        path: "faq",
        element: <FAQ />,
    },
    {
        path: "tnc",
        element: <TNC />,
    },
    {
        path: "services",
        element: <Services />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
]


const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: homeChildRoutes
    },
    {
        path: "/app",
        element: <ProtectedRoute children={<AppLayout />} />,
        children: appChildRoutes
    }
]);

export default Router