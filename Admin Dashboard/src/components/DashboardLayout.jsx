import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";
import PageLabelContext from "../contexts/PageLabelContext";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
    const [pageLabel, setPageLabel] = useState("Dashboard");
    useEffect(() => {
        window.localStorage.setItem("label", pageLabel);
    }, [pageLabel]);
    return (
        <PageLabelContext.Provider value={[pageLabel, setPageLabel]}>
            <div className="flex max-h-screen h-screen">
                <SideBar />
                <div className="flex-1 bg-surface overflow-scroll">
                    <DashboardHeader />
                    <div className="p-4 md:h-[calc(100vh-71px)] h-[calc(100vh-126px)] ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </PageLabelContext.Provider>
    );
}
