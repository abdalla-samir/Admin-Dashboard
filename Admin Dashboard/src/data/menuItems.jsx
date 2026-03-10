import HomeLogo from "../assets/icons/home.svg?react";
import Pages from "../assets/icons/pages.svg?react";
import Applications from "../assets/icons/applications.svg?react";
import Ecommerce from "../assets/icons/e commerce.svg?react";
import Authentication from "../assets/icons/authentication.svg?react";

export const menu = [
    {
        id: "home",
        label: "Home",
        icon: <HomeLogo />,
        children: [
            {
                id: "dashboard",
                label: "Dashboard",
            },
            {
                id: "analytics",
                label: "Analytics",
            },
        ],
    },
    {
        id: "pages",
        label: "Pages",
        icon: <Pages />,
        children: [
            {
                id: "profile",
                label: "Profile",
                children: [
                    { id: "profileOverview", label: "Profile overview" },
                    { id: "teams", label: "Teams" },
                    { id: "allProjects", label: "All Projects" },
                ],
            },
            {
                id: "user",
                label: "User",
                children: [
                    { id: "reports", label: "Reports" },
                    { id: "newUser", label: "New User" },
                ],
            },
            {
                id: "account",
                label: "Account",
                children: [
                    { id: "setting", label: "Setting" },
                    { id: "billing", label: "Billing" },
                    { id: "invoice", label: "Invoice" },
                    { id: "security", label: "Security" },
                ],
            },
            {
                id: "projects",
                label: "Projects",
                children: [
                    { id: "general", label: "General" },
                    { id: "timeline", label: "Timeline" },
                    { id: "newProject", label: "New Project" },
                ],
            },
            {
                id: "pricingPage",
                label: "Pricing Page",
            },
            {
                id: "charts",
                label: "Charts",
            },
            {
                id: "notification",
                label: "Notification",
            },
            {
                id: "chat",
                label: "Chat",
            },
        ],
    },
    {
        id: "application",
        label: "Application",
        icon: <Applications />,
        children: [
            { id: "kanban", label: "Kanban" },
            { id: "wizard", label: "Wizard" },
            { id: "dataTables", label: "Data tables" },
            { id: "calender", label: "Calender" },
        ],
    },
    {
        id: "eCommerce",
        label: "E-commerce",
        icon: <Ecommerce />,
        children: [
            { id: "overview", label: "Overview" },
            {
                id: "products",
                label: "Products",
                children: [
                    { id: "newProduct", label: "New Product" },
                    { id: "productList", label: "Product List" },
                ],
            },
            {
                id: "orders",
                label: "Orders",
                children: [
                    {
                        id: "orderList",
                        label: "Order list",
                    },
                    {
                        id: "orderDetail",
                        label: "Order Detail",
                    },
                ],
            },
        ],
    },
    {
        id: "authentication",
        label: "Authentication",
        icon: <Authentication />,
        children: [],
    },
];
