export default function KPICard({ title, value, icon, bgColor, opacity }) {
    return (
        <div className="flex-1 shadow p-4 text-text flex flex-col gap-5">
            <div className="flex items-center gap-3">
                {icon}
                <span className="text-title-small">{title}</span>
            </div>
            <span className="text-5xl block font-bold">{value}</span>
            <span
                className="relative h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: opacity }}
            >
                <span
                    className="absolute w-1/2 h-full"
                    style={{ backgroundColor: bgColor }}
                ></span>
            </span>
        </div>
    );
}
