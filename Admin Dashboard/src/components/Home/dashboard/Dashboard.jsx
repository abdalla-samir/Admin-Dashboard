import ActiveUser from "../../charts/ActiveUsers";
import SaleChart from "../../charts/SaleChart";
import Pages from "/src/assets/icons/pages.svg?react";
import Wave from "/src/assets/icons/wave.svg?react";

export default function Dashboard() {
    return (
        <div className="flex-1 grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="bg-white rounded p-5">
                    <h2 className="mb-6 text-text text-title-large">
                        Active users right now
                    </h2>
                    <div className="flex max-md:flex-col text-text gap-6">
                        <div className="">
                            <div className="flex flex-col items-center border-b border-border">
                                <span className="text-primary text-7xl">
                                    300
                                </span>
                                <div className="flex items-center gap-2 my-4 text-body-medium">
                                    <Pages className="text-primary" />
                                    Page views per minute
                                </div>
                            </div>
                            <div className="my-4 flex flex-col items-center">
                                <Wave />
                                <p className="text-body-medium">
                                    Upgrade your payout method in setting
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 shadow rounded">
                            <ActiveUser />
                        </div>
                    </div>
                </div>
                <div className="bg-white flex-1 p-5">
                    <h2 className="mb-6 text-text text-title-large flex justify-between">
                        Sales by Age
                        <span className="text-primary text-title-small flex items-center">
                            <span className="w-2 h-2 rounded-full bg-primary mr-1"></span>
                            Sales
                        </span>
                    </h2>
                    <SaleChart />
                </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6">
                <div className="bg-white">one</div>
                <div className="bg-white">two</div>
                <div className="bg-white">three</div>
            </div>
        </div>
    );
}
