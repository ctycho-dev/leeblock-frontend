import { FC, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner'
import ReactLoading from 'react-loading';
import InputCustom from "../components/inputCutom";
import { sendEmailCallRequired } from "../utils/email";

import { IoClose } from "react-icons/io5";
import PhoneInput from 'react-phone-input-2'

interface IPreorderForm {
    visiblePreorder: boolean
    setVisiblePreorder: any
    productName: string
}

const PreorderForm: FC<IPreorderForm> = ({ visiblePreorder, setVisiblePreorder, productName }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isDisabled, setButtonDisabled] = useState(false)

    const makePreorder = async () => {
        if (!name) {
            toast.error('Поле "Имя" обязателено к заполнению')
            return
        } else if (!phone) {
            toast.error('Поле "Телефон" обязателено к заполнению')
            return
        }
        setButtonDisabled(true)

        let res = await sendEmailCallRequired(name, phone, 'Предзаказ', productName)
        if (!res || res?.status !== 200) {
            toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
        } else {
            toast.success('С Вами свяжутся в ближайшее время.')
            setName('')
            setPhone('')
        }
        setVisiblePreorder(false)
        setButtonDisabled(false)

    }

    return (
        <>
            <div className={`
                bg-sidebar
                fixed top-0 right-0 left-0 w-screen h-screen
                overflow-hidden z-[999]
                transition-all ${visiblePreorder ? '' : 'hidden'}`}></div>
            <div className={`fixed w-screen top-0 left-0 h-screen z-[1000] ${visiblePreorder ? '' : 'hidden'} flex items-center justify-center`}>
                <div className="relative bg-white p-6 md:p-12 rounded-xl mx-2 w-full sm-mobile:w-96">
                    <div className="absolute right-2 top-2"><span onClick={() => { setVisiblePreorder(false) }}><IoClose className="text-2xl" /></span></div>
                    <h1 className="text-center font-bold text-2xl mb-2">Оформить предзаказ</h1>
                    <h3 className="text-gray-500 mb-3">Оставьте свои данные и мы свяжемся с вами</h3>
                    <div className="mb-3">
                        <InputCustom type="text" name='name' label="Имя" value={name} placeholder="Иван" onChangeFunc={setName} />
                    </div>
                    <div className="mb-3">
                        <label className={'required'}>Телефон</label>
                        <PhoneInput
                            country={'ru'}
                            value={phone}
                            containerClass={'mt-2 h-10 border rounded-lg'}
                            onChange={(e) => { setPhone(e) }}
                        />
                    </div>
                    <button onClick={makePreorder} className={`flex items-center justify-center gap-x-2
                    button-gradient py-2 rounded-xl w-full transition-shadow duration-150 shadow-custom3 hover:shadow-custom4 disabled:pointer-events-none disabled:opacity-50`}
                    disabled={isDisabled}>
                        Оформить предзаказ
                        {
                            isDisabled ?
                                <ReactLoading type='spinningBubbles' color='#000' height={'20px'} width={'20px'} />
                                : ''
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default PreorderForm