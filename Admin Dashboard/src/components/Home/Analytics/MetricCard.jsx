import Cross from "/src/assets/icons/arrow.svg?react";

export default function MetricCard({
    title,
    value,
    change,
    changeType,
    date,
    additionalInfo,
}) {
    return (
        <div className="p-4 text-text shadow">
            <div className=" flex justify-between items-start">
                <span className="text-body-medium">{title}</span>
                <span className="flex justify-around items-center w-15 ml-4 rounded bg-surface-muted text-primary text-body-small">
                    {changeType === "up" ? (
                        <Cross className="rotate-180" width={10} />
                    ) : (
                        <Cross width={10} />
                    )}
                    <span className="">{change}%</span>
                </span>
            </div>
            <span className="block my-1 text-2xl font-bold text-primary">
                {value}
            </span>
            <span className="text-text-light text-body-small">
                {date}
                {additionalInfo}
            </span>
        </div>
    );
}
