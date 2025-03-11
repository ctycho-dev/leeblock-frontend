import { type FC, useState, useRef, useEffect } from "react"
import { useMediaQuery, useTheme } from "@mui/material"
import { featuresData } from "../../store/featuresData"

const FeaturesSection: FC = () => {
    const [translateX, setTranslateX] = useState(0)
    const [maxTranslateX, setMaxTranslateX] = useState(0)
    const gridRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    useEffect(() => {
        if (!gridRef.current) return

        const calculateMaxTranslate = () => {
            const gridWidth = gridRef.current?.scrollWidth || 0
            const containerWidth = gridRef.current?.offsetWidth || 0
            const newMaxTranslateX = Math.max(0, gridWidth - containerWidth)
            setMaxTranslateX(newMaxTranslateX)
        }

        calculateMaxTranslate()

        // Recalculate on window resize
        const handleResize = () => calculateMaxTranslate()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleNext = () => {
        setTranslateX((prev) => Math.min(prev + 370, maxTranslateX))
    }

    const handlePrevious = () => {
        setTranslateX((prev) => Math.max(prev - 370, 0))
    }

    const NavigationButtons: FC = () => (
        <div className="flex gap-x-2">
            <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity disabled:opacity-30`}
                aria-label="Previous"
                disabled={translateX === 0}
                onClick={handlePrevious}
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </button>
            <button
                className="rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity disabled:opacity-30"
                aria-label="Next"
                disabled={translateX >= maxTranslateX}
                onClick={handleNext}
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>
        </div>
    )

    return (
        <section className="relative overflow-hidden text-white border-b border-zinc-700 bg-zinc-900/30 py-16">
            <div className="relative z-10 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
                        <div className="space-y-3">
                            <h2 className="text-center text-2xl tablet:text-3xl font-semibold leading-tight md:text-start bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent">
                                Криптовалюта под вашим контролем
                            </h2>
                            <p className="text-center text-base text-zinc-400 md:text-lg mx-auto max-w-md md:mx-0 md:text-start">
                                Ваш надежный партнер для безопасного, надежного и удобного управления криптовалютой
                            </p>
                        </div>
                        <div className="hidden md:flex">
                            <NavigationButtons />
                        </div>
                    </div>

                    {/* Desktop Carousel */}
                    <div ref={gridRef} className="hidden md:block overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out space-x-4"
                            style={{ transform: `translateX(-${translateX}px)` }}
                        >
                            {featuresData.map((item, index) => (
                                <FeatureCard key={index} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile Scrollable Area */}
                    <div
                        className="md:hidden overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        role="region"
                        aria-label="Features carousel"
                    >
                        <div className="flex space-x-5">
                            {featuresData.map((item, index) => (
                                <FeatureCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background gradient effect */}
            <div className="absolute bottom-0 left-0 z-0 size-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-900 blur-2xl"></div>
        </section>
    )
}

interface FeatureCardProps {
    item: {
        icon: string
        title: string
        description: string
    }
}

const FeatureCard: FC<FeatureCardProps> = ({ item }) => {
    return (
        <div className="flex-shrink-0 w-[350px] overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6">
            <div className="w-12 h-12 mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
        </div>
    )
}

export default FeaturesSection