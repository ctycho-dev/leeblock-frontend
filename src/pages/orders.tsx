import { FC, useEffect, useState } from "react";
import axios from "axios";
import { OrdersList } from "../components/orders/ordersList";
import { IOrder } from "../types";
import { Navbar } from "../components/header/navbar";
import { getOrders } from "../utils/orders";

interface IOrders { }

const Orders: FC<IOrders> = ({ }) => {
    const [orders, setOrders] = useState<IOrder[] | null>(null)

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getOrders();
            if (res && 'data' in res) {
                setOrders(res.data)
            }
        };

        fetchApi();
    }, [])

    return (
        <>
            <Navbar />
            <main className="max-w-7xl m-auto">
            <OrdersList isLoading={false} orders={orders} />
            </main>
        </>
    )
}

export default Orders