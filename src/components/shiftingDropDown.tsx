import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiFile,
  FiFolder,
  FiUsers,
  FiHelpCircle
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getProductById } from "../utils/products";


import email from '../assets/links/mail.svg'
import phone from '../assets/links/headphones.svg'

// Define types for the tab structure
interface TabType {
  id: number;
  title: string;
  Component: React.ComponentType;
}

export const ShiftingDropDown: React.FC = () => {
  return (
    <Tabs />
  );
};

const Tabs: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

interface TabProps {
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}

const Tab: React.FC<TabProps> = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-black dark:text-white ${selected === tab
        ? " bg-white shadow-custom"
        // ? " bg-neutral-800 text-neutral-100"
        //   : "text-black"
        : ""
        //   : "text-neutral-400 dark:text-white"
        }`}
    >
      <span className="flex items-center gap-x-2">{children}</span>
      <FiChevronDown
        className={`transition-transform ${selected === tab ? "rotate-180" : ""
          }`}
      />
    </button>
  );
};

interface ContentProps {
  selected: number | null;
  dir: "l" | "r" | null;
}

const Content: React.FC<ContentProps> = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[27rem] rounded-lg bg-white shadow-custom p-4 z-20"
    // className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge: React.FC = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

interface NubProps {
  selected: number | null;
}

const Nub: React.FC<NubProps> = ({ selected }) => {
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border bg-white shadow-custom4"
    // className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products: React.FC = () => {


  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const fetchedBlack = await getProductById('onekey-pro-black')
  //     const fetchedWhite = await getProductById('onekey-classic-1s')
  //     console.log(fetchedBlack)
  //     console.log(fetchedWhite)
  //     // if (fetchedWhite && fetchedWhite.data) {
  //     //     setWhitePro(fetchedWhite.data)
  //     // }
  //     // if (fetchedBlack && fetchedBlack.data) {
  //     //     setBlackPro(fetchedBlack.data)
  //     // }
  //     // if (fetchedItemsToDisplay && fetchedItemsToDisplay.data) {
  //     //     setItemsToDisplay(fetchedItemsToDisplay.data)
  //     // }
  // }

  // fetchAPI()
  // }, [])
  return (
    <div>
      <div className="text-white flex gap-4">
        <div>
          
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-green-primary">
        {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300"> */}
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const General: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <Link to={'/about'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        {/* <FiHome className="mb-2 text-xl text-indigo-300" /> */}
        <FiHome className="mb-2 text-xl text-black" />
        <span className="text-xs">О компании</span>
      </Link>
      <Link to={'/politika'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        {/* <FiBarChart2 className="mb-2 text-xl text-black" /> */}
        <FiFile className="mb-2 text-xl text-black" />
        <span className="text-xs">Политика</span>
      </Link>
      <Link to={'/agreement'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        {/* <FiPieChart className="mb-2 text-xl text-black" /> */}
        <FiFolder className="mb-2 text-xl text-black" />
        <span className="text-xs">Документы</span>
      </Link>
    </div>
  );
};

const Customers: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
      <Link to={'/politika'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <FiFile className="mb-2 text-xl text-black" />
        <span className="text-xs">Оплата и доставка</span>
      </Link>
      <Link to={'/agreement'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <FiHelpCircle className="mb-2 text-xl text-black" />
        <span className="text-xs">Поддержка</span>
      </Link>
    </div>
  );
};

const Contacts: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
        <Link to={'/politika'}
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <img src={phone} alt="" className="mb-2 text-xl text-black" />
          <span className="text-xs">+7(995) 629-58-89</span>
        </Link>
        <Link to={'/agreement'}
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <img src={email} alt="" className="mb-2 text-xl text-black" />
          <span className="text-xs">info@leeblock.ru</span>
        </Link>
      </div>
    </>
  );
};

const TABS: TabType[] = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Общее",
    Component: General,
  },
  {
    title: "Покупателям",
    Component: Customers,
  },
  {
    title: "Контакты",
    Component: Contacts,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
