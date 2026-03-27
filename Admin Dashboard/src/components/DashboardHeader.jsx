import { useState } from "react";
import Search from "../assets/icons/search.svg?react";
import { useContext } from "react";
import ActiveLinkContext from "../contexts/PageLabelContext";

export default function DashboardHeader() {
    const [searchInput, setSearchInput] = useState("");
    const [activeLink] = useContext(ActiveLinkContext);
    return (
        <div className="sticky z-10 top-0 flex items-center justify-between  gap-4 flex-wrap max-sm:flex-col max-sm:justify-center shadow p-4 bg-white">
            <span className="text-primary text-heading-large sm:w-55 inline-block">
                {activeLink}
            </span>
            <label className="w-fit inline-flex items-center justify-between bg-surface border border-border py-2 px-3 rounded-full text-body-medium max-sm:w-full">
                <input
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    type="search"
                    className="w-3xs outline-none placeholder:text-text-light"
                    placeholder="Search anything here..."
                />
                <Search className="ml-2" />
            </label>
        </div>
    );
}
