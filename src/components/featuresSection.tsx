import { FC, useState, useRef, useEffect } from 'react';


const FeaturesSection: FC = () => {

    const [translateX, setTranslateX] = useState(0)
    const [maxTranslateX, setMaxTranslateX] = useState(0)
    const gridRef = useRef<HTMLDivElement>(null); // Ref for the grid container

    useEffect(() => {
        if (!gridRef.current) return;

        const gridWidth = gridRef.current.scrollWidth; // Total scrollable width
        const containerWidth = gridRef.current.offsetWidth; // Visible container width
        const maxTranslateX = gridWidth - containerWidth; // Maximum negative translateX
        // console.log(gridWidth)
        // console.log(containerWidth)
        // console.log(maxTranslateX)
        setMaxTranslateX(maxTranslateX)


    }, [])

    useEffect(() => {
        console.log('translateX', translateX)
        console.log('maxTranslateX', maxTranslateX)
    }, [translateX])

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
                        className="grid"
                        style={{
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            transform: `translateX(${translateX}px)`, // Apply translation
                            transition: 'transform 0.3s ease-in-out', // Smooth transition
                        }}
                    >
                        {[
                            {
                                title: 'Сквозное шифрование',
                                description:
                                    'OneKey использует ведущую в отрасли технологию шифрования для локального хранения вашей информации. Только вы можете расшифровать эту информацию.',
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-12 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-3 text-blue-50"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line x1="12" y1="19" x2="12" y2="5" />
                                        <polyline points="5 12 12 5 19 12" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Ваши криптовалюты в ваших руках',
                                description:
                                    'OneKey не будет хранить ваши личные ключи или фразу восстановления. Аппаратные кошельки и приложения OneKey имеют 100% открытый исходный код.',
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-12 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-3 text-blue-50"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Лучшие цены и гарантия',
                                description:
                                    'Как официальные реселлеры OneKey, мы предлагаем оригинальные устройства по доступным ценам с официальной гарантией. Вы всегда можете быть уверены в подлинности и качестве, без переплат.',
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-12 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-3 text-blue-50"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Профессиональная поддержка на каждом шаге',
                                description:
                                    'Мы всегда готовы помочь вам с выбором и использованием продукта. Наши эксперты обеспечат простой и комфортный опыт, предлагая лучшее обслуживание и постоянную поддержку.',
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-12 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-3 text-blue-50"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Простота и удобство',
                                description:
                                    'Мы упростили процесс покупки для вашего удобства: от выбора товара до оформления заказа — всё быстро и интуитивно. Легкий интерфейс, удобная оплата и быстрая доставка!',
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-12 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-3 text-blue-50"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                ),
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6 shrink-0"
                                style={{
                                    width: '350px',
                                    marginRight: '20px',
                                    // filter: index === 4 ? 'blur(2px)' : 'blur(0px)',
                                }}
                            >
                                {item.icon}
                                <p className="mb-1.5 mt-3 text-lg font-medium">{item.title}</p>
                                <p className="text-sm text-zinc-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex md:hidden items-center justify-end gap-2 mt-6">
                        <NextButtons />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 z-0 size-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-900 blur-2xl"></div>
        </section>
    );

};

export default FeaturesSection;

