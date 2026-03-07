import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MenuItem from "./MenuItem";
import Logo from "../assets/images/Logo.svg";
import HomeLogo from "../assets/icons/home.svg?react";
import Pages from "../assets/icons/pages.svg?react";
import Applications from "../assets/icons/applications.svg?react";
import Ecommerce from "../assets/icons/e commerce.svg?react";
import Authentication from "../assets/icons/authentication.svg?react";
import MenuBar from "../assets/icons/menu_bar.svg?react";
import Cross from "../assets/icons/cross.svg?react";
import PageLabelContext from "../contexts/PageLabelContext";

const menu = [
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
                    { id: "editProduct", label: "Edit Product" },
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
export default function SideBar() {
    const [activeLink, setActiveLink] = useState("dashboard");
    const [, setPageLabel] = useContext(PageLabelContext);
    const [openMenus, setOpenMenus] = useState([]);
    const [showToggleMenu, setShowToggleMenu] = useState(
        () => window.matchMedia("(max-width: 768px)").matches,
    );
    const [showSideBar, setShowSideBar] = useState(
        () => window.matchMedia("(min-width: 768px)").matches,
    );
    // const [showToggleMenu, setShowToggleMenu] = useState(null);
    const menuList = menu.map((item) => (
        <MenuItem
            key={item.id}
            item={item}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            openMenus={openMenus}
            setOpenMenus={setOpenMenus}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            setPageLabel={setPageLabel}
        />
    ));
    useEffect(() => {
        const showSideBarMediaQuery = window.matchMedia("(min-width: 768px)");
        const showToggleMenuMediaQuery =
            window.matchMedia("(max-width: 768px)");
        function handleResize() {
            setShowSideBar(showSideBarMediaQuery.matches);
            setShowToggleMenu(showToggleMenuMediaQuery.matches);
        }
        showSideBarMediaQuery.addEventListener("change", handleResize);
        showToggleMenuMediaQuery.addEventListener("change", handleResize);
        return () => {
            showSideBarMediaQuery.removeEventListener("change", handleResize);
            showToggleMenuMediaQuery.removeEventListener(
                "change",
                handleResize,
            );
        };
    }, []);
    return (
        <div
            className={`bg-neutral p-2 flex flex-col transition max-md:fixed h-screen shadow`}
        >
            <button
                onClick={() => setShowSideBar((prev) => !prev)}
                className={`cursor-pointer block ml-auto mt-4 p-2 bg-primary-300 hover:bg-primary-400 transition rounded text-primary hover:text-primary-hover ${!showToggleMenu ? "hidden" : ""}`}
            >
                {!showSideBar ? <MenuBar /> : <Cross />}
            </button>
            <Link to="/" className="block w-fit mx-auto mt-4 mb-12">
                <img
                    src={Logo}
                    alt="logo"
                    className={`${!showSideBar && "hidden"}`}
                />
            </Link>
            <ul
                className={`px-3 flex-1 text-body-medium overflow-scroll text-text ${!showSideBar && "hidden"}`}
            >
                {menuList}
            </ul>
        </div>
    );
}
