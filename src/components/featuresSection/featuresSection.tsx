import { FC, useState, useRef, useEffect } from 'react';
import { featuresData } from '../../store/featuresData';


const FeaturesSection: FC = () => {

    const [translateX, setTranslateX] = useState(0)
    const [maxTranslateX, setMaxTranslateX] = useState(0)
    const gridRef = useRef<HTMLDivElement>(null); // Ref for the grid container

    useEffect(() => {
        if (!gridRef.current) return;

        const gridWidth = gridRef.current.scrollWidth; // Total scrollable width
        const containerWidth = gridRef.current.offsetWidth; // Visible container width
        const maxTranslateX = gridWidth - containerWidth; // Maximum negative translateX
        setMaxTranslateX(maxTranslateX)


    }, [])

    const handleNext = () => {
        setTranslateX((prev) => (Math.abs(prev) < maxTranslateX ? prev - 370 : prev));
    };

    const handlePrevious = () => {
        setTranslateX((prev) => (prev < 0 ? prev + 370 : prev));
    };

    const NextButtons: FC = () => {

        return (
            <>
                <button
                    className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity disabled:opacity-30`}
                    disabled={translateX == 0}
                    aria-label="Previous"
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
                    disabled={translateX * -1 >= maxTranslateX}
                    aria-label="Next"
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
            </>
        )
    }

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
                        <div className="hidden md:flex items-center gap-2">
                            <NextButtons />
                        </div>
                    </div>
                    <div
                        ref={gridRef}
                        className="hidden md:grid"
                        style={{
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            transform: `translateX(${translateX}px)`,
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <FeatureBlock />
                    </div>
                    <div id="scroll-section" className="md:hidden scroll-area -me-6 tablet:-me-10 lg:me-0 mb-10">
                        <div className="adv-items">
                            <FeatureBlock />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 z-0 size-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-900 blur-2xl"></div>
        </section>
    );

};

export default FeaturesSection;


const FeatureBlock: FC = () => {

    return (
        <>
            {featuresData.map((item, index) => (
                <div
                    key={index}
                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6 shrink-0"
                    style={{
                        width: '350px',
                        marginRight: '20px',
                    }}
                >
                    <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                    <p className="mb-1.5 mt-3 text-lg font-medium">{item.title}</p>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                </div>
            ))}
        </>
    )
}