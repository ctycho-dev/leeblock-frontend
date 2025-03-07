
// Custom Skeleton component
const Skeleton = ({ className }: { className: string }) => <div className={`animate-pulse bg-muted ${className}`}></div>


export const OrdersListSkeleton = () => {

    return (
        <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-8 w-32" />
            </div>
            <div className="rounded-md border">
                <div className="border-b bg-muted/50 px-4 py-3">
                    <Skeleton className="h-6 w-full" />
                </div>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`border-b px-4 py-4 ${i % 2 === 0 ? "bg-muted/20" : ""}`}>
                        <Skeleton className="h-6 w-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}