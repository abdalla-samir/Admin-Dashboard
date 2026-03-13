import SalesFunnelChart from "./SalesFunnelChart";
import { dashboardData } from "../../../data/analytics";
import { deviceCategoryData } from "../../../data/deviceCategoryData";
import MetricCard from "./MetricCard";
import DeviceCategory from "./DeviceCategory";
export default function Analytics() {
    const metricCardsArray = dashboardData.map((data) => {
        return (
            <MetricCard
                key={data.id}
                title={data.title}
                value={data.value}
                change={data.change}
                changeType={data.changeType}
                date={data.date}
                additionalInfo={data.additionalInfo}
            />
        );
    });
    const deviceCategory = deviceCategoryData.map((data) => {
        return (
            <DeviceCategory
                key={data.id}
                icon={data.icon}
                title={data.title}
                value={data.value}
            />
        );
    });
    return (
        <>
            <div className="grid gap-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-stretch  gap-4 p-5 bg-white">
                    {metricCardsArray}
                </div>
                <div className="grid xl:grid-cols-4 gap-6">
                    <div className="p-5 bg-white rounded xl:col-span-3 ">
                        <h2 className="text-title-large">Sales Funnel</h2>
                        <SalesFunnelChart />
                    </div>
                    <div className="bg-white p-5 flex flex-col">
                        <h2 className="text-title-large">Device Category</h2>
                        {deviceCategory}
                    </div>
                </div>
            </div>
        </>
    );
}
