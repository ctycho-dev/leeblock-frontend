import { FC } from "react";

interface IFooterForm {
}

const FooterForm: FC<IFooterForm> = ({ }) => {


    return (
        <>
            <div className="grid md:justify-end">
                <span className="text-xs mb-2 text-[#45E555]">Заказать обратную связь?</span>
                <div className="grid tablet:grid-cols-221 gap-y-2">
                    <input type="text" placeholder="Name" className="h-12 border border-[#439F67] rounded-lg outline-none bg-transparent px-4" />
                    <input type="text" placeholder="Phone" className="h-12 tablet:ml-2 border border-[#439F67] rounded-lg outline-none bg-transparent px-4" />
                    <button className="h-12 text-black button-gradient py-2 px-4 rounded-xl hover:-mt-[2px] hover:mb-[2px] transition-all tablet:ml-2">
                        Отправить
                    </button>
                </div>
            </div>
        </>
    )
}

export default FooterForm