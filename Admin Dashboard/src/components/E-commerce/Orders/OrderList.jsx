import { useNavigate } from "react-router-dom";
import useOrder from "../../../hooks/useOrder";

export default function OrderList() {
    const navigate = useNavigate();
    const [orders] = useOrder();
    const ordersArray = orders.map((order) => {
        return (
            <tr key={order.id} className="not-last:border-b border-border">
                <td className="table-data-cell text-body-medium">
                    <span className="text-text block">
                        {order.customerName}
                    </span>
                    {order.customerEmail}
                </td>
                <td className="table-data-cell text-body-medium">
                    {order.product}
                </td>
                <td className="table-data-cell text-body-medium">
                    #{order.id}
                </td>
                <td className="table-data-cell text-body-medium">
                    {order.revenue}
                </td>
                <td className="table-data-cell text-body-medium relative">
                    <span
                        className={`absolute left-0 w-2.5 h-2.5 top-1/2 -translate-y-1/2 rounded-full ${order.status === "Paid" ? "bg-secondary" : order.status === "Canceled" ? "bg-danger" : order.status === "Refunded" ? "bg-success" : ""}`}
                    ></span>
                    {order.status}
                </td>
                <td className="table-data-cell text-body-medium">
                    {order.date}
                </td>
                <td className="table-data-cell text-body-medium">
                    <button
                        className="cursor-pointer"
                        onClick={() =>
                            navigate(`/e-commerce/orders/${order.id}/edit`)
                        }
                    >
                        View Details
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <div className="flex-1 p-4 bg-white rounded shadow overflow-scroll">
            <table className=" w-full rounded min-w-4xl">
                <thead className="p-4">
                    <tr>
                        <th className="table-head-cell text-title-medium">
                            Customer
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Product
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Id
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Revenue
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Status
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Date
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>{ordersArray}</tbody>
            </table>
        </div>
    );
}
