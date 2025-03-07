import { IOrder } from "@/src/types";

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
        {children}
    </span>
)


// Status badge component
export const StatusBadge = ({ status }: { status: IOrder["status"] }) => {
    const statusConfig = {
        NEW: { color: "bg-blue-100 text-blue-800", label: "New" },
        PROCESSING: { color: "bg-yellow-100 text-yellow-800", label: "Processing" },
        SHIPPED: { color: "bg-purple-100 text-purple-800", label: "Shipped" },
        DELIVERED: { color: "bg-green-100 text-green-800", label: "Delivered" },
        CANCELLED: { color: "bg-red-100 text-red-800", label: "Cancelled" },
    }

    const config = statusConfig[status]

    return (
        <Badge className={`${config.color} border-0 font-medium`}>
            {config.label}
        </Badge>
    )
}