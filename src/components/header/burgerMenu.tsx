import React from "react";


interface BurgerMenuProps {
    theme?: string
    handler: () => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ theme, handler }) => {

    return (
        <>
            <div
                id="burger-menu"
                className={`${theme == 'dark' ? 'bg-gray-700' : 'bg-white'} flex md:hidden shadow-custom rounded-full justify-center items-center w-12 h-12 hover:cursor-pointer`}
                onClick={handler}>
                <div className="grid gap-y-1">
                    <div className={`${theme == 'dark' ? 'bg-white' : 'bg-black'} w-6 h-[3px] rounded-md`}></div>
                    <div className={`${theme == 'dark' ? 'bg-white' : 'bg-black'} w-6 h-[3px] rounded-md`}></div>
                    <div className={`${theme == 'dark' ? 'bg-white' : 'bg-black'} w-6 h-[3px] rounded-md`}></div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu