import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";
import PageLabelContext from "../contexts/PageLabelContext";
import { useState } from "react";

export default function DashboardLayout() {
    const [pageLabel, setPageLabel] = useState("Dashboard");
    return (
        <PageLabelContext.Provider value={[pageLabel, setPageLabel]}>
            <div className="flex max-h-screen h-screen">
                <SideBar />
                <div className="flex-1 flex flex-col bg-surface max-h-screen overflow-scroll max-md:ml-12.5 p-4 ">
                    <DashboardHeader />
                    <Outlet />
                </div>
            </div>
        </PageLabelContext.Provider>
    );
}
