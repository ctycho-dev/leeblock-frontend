"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IOrder, IOrderItem } from "@/src/types";

import { OrdersListSkeleton } from "./orderListSkeleton";
import { StatusBadge } from "./badge";
import { OrderExpanded } from "./orderExpanded";

interface IOrdersList {
    isLoading: boolean
    orders: IOrder[] | null
}


export const OrdersList: React.FC<IOrdersList> = ({ isLoading = false, orders }) => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})

    useEffect(() => {
        console.log(orders)
    }, [])

    const toggleRow = (orderId: string) => {
        setExpandedRows((prev) => ({
            ...prev,
            [orderId]: !prev[orderId],
        }))
    }

    if (isLoading) {
        return <OrdersListSkeleton />
    }

    return (
        <div className="w-full border-r border-l">
            <div className="rounded-md overflow-auto">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 font-medium">
                    <div className="col-span-1"></div>
                    <div className="col-span-2">Order ID</div>
                    <div className="col-span-3">Customer</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Date</div>
                </div>
                {orders?.map((order, index) => {
                    const isExpanded = expandedRows[order.id] || false

                    return (
                        <div
                            key={order.id}
                            className={`border-b transition-colors ${isExpanded ? "bg-muted/30" : index % 2 === 0 ? "bg-muted/10" : ""
                                } hover:bg-muted/20`}
                        >
                            <div
                                className="grid grid-cols-12 items-center px-4 py-3 cursor-pointer"
                                onClick={() => toggleRow(order.id)}
                            >
                                <div className="col-span-1">
                                    {isExpanded ? <IoIosArrowDown className="h-5 w-5" /> : <IoIosArrowForward className="h-5 w-5" />}
                                </div>
                                <div className="col-span-2 font-medium">{order.id}</div>
                                <div className="col-span-3">{`${order.first_name} ${order.last_name}`}</div>
                                <div className="col-span-2">
                                    {new Intl.NumberFormat("ru-RU", {
                                        style: "currency",
                                        currency: "RUB",
                                        minimumFractionDigits: 0, // No decimal places
                                        maximumFractionDigits: 2, // No decimal places
                                    }).format(order.amount / 100)}
                                </div>
                                <div className="col-span-2">
                                    <StatusBadge status={order.status} />
                                </div>
                                <div className="col-span-2">{new Date(order.created_at).toLocaleDateString()}</div>
                            </div>
                            {isExpanded && (
                                <OrderExpanded order={order} />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

