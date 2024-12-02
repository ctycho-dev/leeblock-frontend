import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiHome,
  FiFile,
  FiFolder,
  FiHelpCircle
} from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


import email from '../../assets/links/mail.svg'
import phone from '../../assets/links/headphones.svg'

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

  return (
    <div>
      <div className="flex gap-4">
        <Link to={'/catalog'} className="grid justify-center gap-y-2">
          <img src="https://ctycho-s3.ru/web/leeblock/products/OneKeyPro_Main_Image_White_01.png" alt="" className="w-44" />
          <div className="text-sm text-center">Onekey Pro White</div>
        </Link>
        <Link to={'/catalog'} className="grid justify-center gap-y-2">
          <img src="https://ctycho-s3.ru/web/leeblock/products/Classic1S_Main_Image02.png" alt="" className="w-44" />
          <div className="text-sm text-center">OneKey Classic 1S</div>
        </Link>
        <Link to={'/catalog'} className="grid justify-center gap-y-2">
          <img src="https://ctycho-s3.ru/web/leeblock/products/SY_cup_01.webp" alt="" className="w-44" />
          <div className="text-sm text-center">Camping Mug</div>
        </Link>
      </div>
      <div className="flex justify-end">
        <Link to={'/catalog'} className="ml-auto mt-4 flex items-center gap-1 text-sm text-green-primary">
          <span>Показать все</span>
          <FiArrowRight />
        </Link>
      </div>
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
        <span className="text-xs">Офферта</span>
      </Link>
    </div>
  );
};

const Customers: React.FC = () => {

  const scrollToFaq = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
        const offset = 80; // Offset in pixels
        const elementPosition = faqSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <Link to={'/payment_and_delivery'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <FiFile className="mb-2 text-xl text-black" />
        <span className="text-xs">Оплата и доставка</span>
      </Link>
      <Link to={'/support'}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <MdOutlineSupportAgent className="mb-2 text-xl text-black" />
        <span className="text-xs">Поддержка</span>
      </Link>
      <div onClick={scrollToFaq}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-600 transition-colors hover:text-neutral-900 hover:cursor-pointer"
      >
        <FiHelpCircle className="mb-2 text-xl text-black" />
        <span className="text-xs">FAQ</span>
      </div>
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
    title: "Продукция",
    Component: Products,
  },
  {
    title: "Покупателям",
    Component: Customers,
  },
  {
    title: "Контакты",
    Component: Contacts,
  },
  {
    title: "Общее",
    Component: General,
  }
].map((n, idx) => ({ ...n, id: idx + 1 }));
