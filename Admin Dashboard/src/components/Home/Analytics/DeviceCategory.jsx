export default function DeviceCategory({ icon, title, value }) {
    return (
        <div className="flex items-center flex-1 mt-5 text-body-medium">
            {icon}
            <span className="flex-1 ml-2">{title}</span>
            <span>{value}</span>
        </div>
    );
}
