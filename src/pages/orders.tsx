import { FC, useEffect, useState } from "react";
import axios from "axios";
import { OrdersList } from "../components/orders/ordersList";
import { IOrder } from "../types";
import { Navbar } from "../components/header/navbar";


interface IOrders { }

const Orders: FC<IOrders> = ({ }) => {
    const [orders, setOrders] = useState<IOrder[] | null>(null)

    useEffect(() => {
        const fetchAPI = () => {
            axios.get(`${process.env.REACT_APP_BACKEND}/requests`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
                }
            })
                .then(res => {
                    setOrders(res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }

        fetchAPI()
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