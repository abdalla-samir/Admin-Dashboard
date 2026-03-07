import { memo } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/icons/arrow.svg?react";

function checkActive(item, activeLink) {
    if (item.id === activeLink) {
        return true;
    } else if (item.children) {
        return item.children.some((child) => {
            return checkActive(child, activeLink);
        });
    } else {
        return false;
    }
}

const MenuItem = memo(function MenuItem({
    item,
    activeLink,
    setActiveLink,
    openMenus,
    setOpenMenus,
    showSideBar,
    setShowSideBar,
    setPageLabel,
}) {
    const isActive = checkActive(item, activeLink);
    const isParent = !!item.children;
    const rootParent = !!item.icon; // root parent only has the icon image
    return (
        <li className="relative">
            <Link
                to="/"
                className={`
                relative flex items-center rounded mb-2 hover:text-primary transition cursor-pointer 
                ${!isParent && "w-fit"}
                ${isParent && isActive && item.icon ? "text-primary bg-primary-100" : ""}
                ${isParent && isActive && "text-primary"}
                ${isActive && !isParent && "text-primary"}
                ${rootParent ? "p-2 " : "p-0"}
                ${rootParent && isActive && "before:content-[''] before:absolute before:bg-primary-hover before:h-full before:w-1 before:rounded-3xl before:left-0"}
                `}
                onClick={() => {
                    if (item.children) {
                        setOpenMenus((prev) => {
                            if (prev.includes(item.id)) {
                                let newArray = prev.filter((m) => {
                                    return m !== item.id;
                                });
                                return newArray;
                            } else {
                                return [...prev, item.id];
                            }
                        });
                    } else {
                        setActiveLink(item.id);
                        setPageLabel(item.label);
                        if (window.innerWidth < 768) {
                            setShowSideBar(false);
                        }
                    }
                }}
            >
                {item.icon}
                <span className={`flex-1 ${rootParent && "ml-2"} `}>
                    {item.label}
                </span>
                {item.children && (
                    <Arrow
                        width={14}
                        className={`transition-all duration-300  ml-3 ${openMenus.includes(item.id) && "rotate-180"} `}
                    />
                )}
            </Link>
            {item.children && openMenus.includes(item.id) && (
                <ul
                    className={`${rootParent ? "ml-8.5" : isParent && !rootParent ? "ml-2.5" : ""}`}
                >
                    {item.children.map((children) => (
                        <MenuItem
                            key={children.id}
                            item={children}
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            openMenus={openMenus}
                            setOpenMenus={setOpenMenus}
                            showSideBar={showSideBar}
                            setShowSideBar={setShowSideBar}
                            setPageLabel={setPageLabel}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
});

export default MenuItem;
