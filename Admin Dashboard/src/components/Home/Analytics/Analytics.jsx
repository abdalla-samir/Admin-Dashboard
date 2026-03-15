import SalesFunnelChart from "/src/components/Charts/SalesFunnelChart";
import { dashboardData } from "../../../data/analytics";
import { deviceCategoryData } from "../../../data/deviceCategoryData";
import { topCountriesData } from "../../../data/topCountries";
import WatchList from "/src/components/Charts/WatchListChart";
import MetricCard from "./MetricCard";
import DataPanel from "./DataPanel";

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
            <DataPanel
                key={data.id}
                icon={data.icon}
                title={data.title}
                value={data.value}
            />
        );
    });
    const topCountries = topCountriesData.map((data) => {
        return (
            <DataPanel
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
                    <div className="xl:col-span-3 bg-white rounded">
                        <h2 className="text-title-large p-5 pb-0">
                            Sales Funnel
                        </h2>
                        <SalesFunnelChart />
                    </div>
                    <div className="bg-white p-5 flex flex-col justify-between">
                        <h2 className="text-title-large">Device Category</h2>
                        {deviceCategory}
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 gap-6">
                    <div className="xl:col-span-3 bg-white rounded">
                        <h2 className="text-title-large p-5 pb-0">
                            Watch List
                        </h2>
                        <WatchList />
                    </div>
                    <div className="bg-white p-5 flex flex-col justify-between">
                        <h2 className="text-title-large">Device Category</h2>
                        {topCountries}
                    </div>
                </div>
            </div>
        </>
    );
}
