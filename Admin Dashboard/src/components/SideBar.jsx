import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MenuItem from "./MenuItem";
import Logo from "../assets/images/Logo.svg";
import MenuBar from "../assets/icons/menu_bar.svg?react";
import Cross from "../assets/icons/cross.svg?react";
import PageLabelContext from "../contexts/PageLabelContext";
import { menu } from "../data/menuItems";

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
