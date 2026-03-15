import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MenuItem from "./MenuItem";
import Logo from "../assets/images/Logo.svg";
import MenuBar from "../assets/icons/menu_bar.svg?react";
import Cross from "../assets/icons/cross.svg?react";
import PageLabelContext from "../contexts/PageLabelContext";
import { menu } from "../data/menuItems";

export default function SideBar() {
    const [activeLink, setActiveLink] = useState(() => {
        const activeLink = window.localStorage.getItem("activeLink");
        return activeLink ? activeLink : "dashboard";
    });
    const [, setPageLabel] = useContext(PageLabelContext);
    const [openMenus, setOpenMenus] = useState(() => {
        const menuList = window.localStorage.getItem("openMenus");
        return menuList ? JSON.parse(menuList) : [];
    });
    const [showToggleMenu, setShowToggleMenu] = useState(
        () => window.matchMedia("(max-width: 768px)").matches,
    );
    const [showSideBar, setShowSideBar] = useState(
        () => window.matchMedia("(min-width: 768px)").matches,
    );
    useEffect(() => {
        window.localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);
    useEffect(() => {
        window.localStorage.setItem("openMenus", JSON.stringify(openMenus));
    }, [openMenus]);
    // const [showToggleMenu, setShowToggleMenu] = useState(null);
    const menuList = menu.map((item) => (
        // console.log(item.path),
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
            level={0}
        />
    ));
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        function handleResize(event) {
            setShowSideBar(event.matches);
            setShowToggleMenu(!event.matches);
        }
        handleResize(mediaQuery);
        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);
    return (
        <>
            <div className="bg-neutral shadow flex flex-col z-50">
                <button
                    onClick={() => {
                        setShowSideBar((prev) => !prev);
                    }}
                    className={`cursor-pointer z-50 bg-primary-300 hover:bg-primary-400 mt-6 mx-2 w-8 h-8 flex items-center justify-center  transition rounded text-primary hover:text-primary-hover ${!showToggleMenu && "hidden"}`}
                >
                    {!showSideBar ? <MenuBar /> : <Cross />}
                </button>
                <div
                    className={` bg-neutral shadow fixed md:static h-screen flex flex-col flex-1 transition ease-in-out transform ${showSideBar ? "translate-x-0 " : "-translate-x-full"}`}
                >
                    <Link to="/" className="block w-fit mx-auto mt-10 mb-12">
                        <img src={Logo} alt="logo" className={``} />
                    </Link>
                    <ul
                        className={`px-2 flex-1 text-body-medium overflow-scroll text-text`}
                    >
                        {menuList}
                    </ul>
                </div>
            </div>
            {showSideBar && (
                <div
                    className="absolute top-0 left-0 w-full z-30 h-full bg-black opacity-30 md:hidden"
                    onClick={() => setShowSideBar(false)}
                ></div>
            )}
        </>
    );
}
