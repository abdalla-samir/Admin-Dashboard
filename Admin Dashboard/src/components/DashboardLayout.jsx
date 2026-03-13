import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";
import PageLabelContext from "../contexts/PageLabelContext";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
    const [pageLabel, setPageLabel] = useState(() => {
        const label = window.localStorage.getItem("label");
        return label ? label : "Dashboard";
    });
    useEffect(() => {
        window.localStorage.setItem("label", pageLabel);
    }, [pageLabel]);
    return (
        <PageLabelContext.Provider value={[pageLabel, setPageLabel]}>
            <div className="flex max-h-screen h-screen">
                <SideBar />
                <div className="flex-1 flex flex-col bg-surface overflow-scroll p-4 ">
                    <DashboardHeader />
                    <Outlet />
                </div>
            </div>
        </PageLabelContext.Provider>
    );
}
