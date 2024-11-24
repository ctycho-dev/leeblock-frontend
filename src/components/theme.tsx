import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type Theme = "light" | "dark";

const ThemeCustom: React.FC = () => {
    let theme: Theme = 'light'
    if (window.localStorage.getItem("theme") && window.localStorage.getItem("theme") == 'dark') {
        theme = 'dark'
    }
    const [selected, setSelected] = useState<Theme>(theme);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (selected === 'light') {
            root.classList.add('dark');
            setSelected('dark');
            window.localStorage.setItem("theme", 'dark')
            metaThemeColor?.setAttribute('content', '#13171D'); // Dark theme color
        } else {
            root.classList.remove('dark');
            setSelected('light');
            window.localStorage.setItem("theme", 'light')
            metaThemeColor?.setAttribute('content', '#F4F5F8'); // Dark theme color
        }
    };

    return (
        <SliderToggle selected={selected} setSelected={toggleTheme} />
    );
};

interface SliderToggleProps {
    selected: Theme;
    setSelected: React.Dispatch<React.SetStateAction<Theme>>;
}

const SliderToggle: React.FC<SliderToggleProps> = ({ selected, setSelected }) => {
    return (
        <div className="relative flex w-fit items-center rounded-full">
            <button
                className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-300"
                    }`}
                onClick={() => {
                    setSelected("light");
                }}
            >
                <FiMoon className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Light</span>
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setSelected("dark");
                }}
            >
                <FiSun className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Dark</span>
            </button>
            <div
                className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full button-gradient dark:bg-gradient-to-r from-gray-400 to-slate-900"
                // className="h-full w-1/2 rounded-full bg-gradient-to-r from-gray-400 to-slate-900"
                // className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};

export default ThemeCustom;
