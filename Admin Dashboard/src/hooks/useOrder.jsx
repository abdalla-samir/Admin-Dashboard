import { useEffect, useState } from "react";
import { orders as initialOrders } from "../data/orders";

export default function useOrder() {
    const [orders, setOrders] = useState(() => {
        const save = window.localStorage.getItem("orders");
        return save ? JSON.parse(save) : initialOrders;
    });
    useEffect(() => {
        window.localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);
    return [orders, setOrders];
}
