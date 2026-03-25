import { earningsByItem } from "../../../data/earningsByItem";
import Arrow from "/src/assets/icons/arrow.svg?react";

export default function EarningsByItems() {
    const earningsByItemsArray = earningsByItem.map((data) => (
        <button className="flex items-center cursor-pointer shadow p-2">
            {data.icon}
            <div className=" flex-1 text-start ml-2">
                <span className="block text-title-small text-text ">
                    {data.title}
                </span>
                <span className="text-body-medium text-text-light">
                    {data.type}
                </span>
            </div>
            <Arrow className="-rotate-90" width={12} />
        </button>
    ));
    return (
        <div className=" flex flex-col gap-4 bg-white rounded p-4">
            <h2 className="text-title-large text-text">Earnings by item </h2>
            <div className="flex flex-col gap-4">{earningsByItemsArray}</div>
        </div>
    );
}
