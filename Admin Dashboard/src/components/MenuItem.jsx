import { memo } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/icons/arrow.svg?react";
import icons from "../data/icons";

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
    level,
}) {
    const isActive = checkActive(item, activeLink);
    return (
        <>
            <li
                key={item.id}
                className={`relative my-2 ${level === 1 ? "ml-8.5" : `ml-${level * 1.5}`} `}
            >
                {item.parent && (
                    <div
                        className={`
                            relative flex gap-2 items-center rounded hover:text-primary transition cursor-pointer 
                            ${isActive && item.root && "bg-primary-200 text-primary"} ${!item.root && isActive ? "text-primary" : ""} 
                            ${item.root && isActive && "before:content-[''] before:absolute before:bg-primary-hover before:h-full before:w-1 before:left-0 before:rounded-3xl before:right-full"} 
                            ${item.root && "hover:bg-primary-200 p-2"} 
                        `}
                        onClick={() => {
                            setOpenMenus((prev) => {
                                if (prev.includes(item.id)) {
                                    let newArray = prev.filter((element) => {
                                        return element !== item.id;
                                    });
                                    return newArray;
                                } else {
                                    return [...prev, item.id];
                                }
                            });
                        }}
                    >
                        {item.root && icons[item.icon]}
                        <span className={`flex-1 ${!showSideBar && "hidden"}`}>
                            {item.label}
                        </span>
                        {item.parent && (
                            <Arrow
                                width={14}
                                className={`transition-all duration-300  ml-3 ${openMenus.includes(item.id) && "rotate-180"} ${!showSideBar && "hidden"}`}
                            />
                        )}
                    </div>
                )}
                {!item.parent && (
                    <Link
                        to={item.path}
                        className={`
                            hover:text-primary
                            ${isActive && "text-primary"}
                            `}
                        onClick={() => {
                            setActiveLink(item.id);
                            setPageLabel(item.label);
                        }}
                    >
                        {item.label}
                    </Link>
                )}
                {item.parent && openMenus.includes(item.id) && (
                    <ul className={`${!showSideBar && "absolute  bg-white"}`}>
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
                                level={level + 1}
                            />
                        ))}
                    </ul>
                )}
            </li>
        </>
    );
});

export default MenuItem;
