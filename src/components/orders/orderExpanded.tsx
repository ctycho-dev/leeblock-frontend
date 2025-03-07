import { Button } from "@mantine/core";
import { IOrder, IOrderItem } from "@/src/types"


interface IOrderExpanded {
    order: IOrder
}

export const OrderExpanded: React.FC<IOrderExpanded> = ({ order }) => {

    const items: IOrderItem[] = JSON.parse(order.bug)

    return (
        <div className="px-4 py-4 pl-10 flex justify-between gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-4">
                <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-2">Shipping Address</h4>
                    <p className="text-sm">{order.address}</p>
                    <p className="text-sm">
                        {order.city}, {order.zip}
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-2">Contact Information</h4>
                    <p className="text-sm">{order.email}</p>
                    <p className="text-sm">{order.phone}</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-2">Payment token</h4>
                    <p className="text-sm max-w-24 truncate">{order.token}</p>
                    <Button variant="outline">Проверить оплату</Button>
                </div>
            </div>

            <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Order Items</h4>
                <div className="rounded-md border overflow-hidden">
                    <div className="grid grid-cols-10 bg-muted/50 py-2 text-xs font-medium">
                        <div className="col-span-4 px-3">Item</div>
                        <div className="col-span-2 px-3">Qty</div>
                        <div className="col-span-2 px-3">Price</div>
                        <div className="col-span-2 px-3">Amount</div>
                    </div>
                    {items.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-10 py-2 text-xs border-t gap-x-2">
                            <div className="col-span-4 px-3">{item.Name}</div>
                            <div className="col-span-2 px-3">{item.Quantity}</div>
                            <div className="col-span-2 px-3">
                                {new Intl.NumberFormat("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 0, // No decimal places
                                    maximumFractionDigits: 2, // No decimal places
                                }).format(item.Price / 100)}
                            </div>
                            <div className="col-span-2 px-3">
                                {new Intl.NumberFormat("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 0, // No decimal places
                                    maximumFractionDigits: 2, // No decimal places
                                }).format(item.Amount / 100)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}