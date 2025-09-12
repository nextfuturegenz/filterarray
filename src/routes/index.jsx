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
    Services,
    OrganisationONBD,
    VerifyIdentityONBD,
    SelectPlanONBD,
} from '../pages';
//import { AppListing } from "@nextfuturegenz/components";
import {AppListing, AddAppToAccount } from "../pages";
import {
    AppLayout,
    DashboardLayout,
    HomeLayout,
    OnboardingLayout
} from '../layout';
import ProtectedRoute from "./protectedRoutes";
//import { wamiRoutes } from "@nextfuturegenz/whatsappteaminbox";
import { wamiRoutes } from "../pages/apps/wami";

const appChildRoutes = [
        {
            path: "dashboard",
            index: true,
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
            children: [
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
];

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

const onBoardingChildRoutes = [
    {
        path: "organisation",
        element: <OrganisationONBD />,
    },
    {
        path: "verify-identity",
        element: <VerifyIdentityONBD />,
    },
    {
        path: "select-plan",
        element: <SelectPlanONBD />,
    },
]

const dashboardChildRoutes = [
    {
        index: true,
        element: <AppListing />,
    },
    {
        path: "subscribe",
        element: <AddAppToAccount />,
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
        children: [...wamiRoutes] //[...appChildRoutes, ...wamiRoutes]
    },
    {
        path: "/onboarding",
        element: <ProtectedRoute children={<OnboardingLayout />} />,
        children: onBoardingChildRoutes
    },
    {
        path: "/home",
        element: <ProtectedRoute children={<DashboardLayout />} />,
        children: dashboardChildRoutes
    },
]);

export default Router