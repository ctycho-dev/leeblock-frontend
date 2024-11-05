import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MyBag } from "../types";
import InputCustom from "../components/inputCutom";
import CheckoutItem from "../components/checkoutItem";
import CityInput from "../components/cityInput";
import { getTotalSum, isValidEmail, isValidPhoneNumber } from "../utils";
import { Toaster, toast } from 'sonner'
import logo from '../assets/logoShort.svg'



declare global {
    interface Window {
        CDEKWidget: any; // Replace `any` with the specific type of CDEKWidget if you know it.
    }
}

interface ICheckout { }

const Checkout: FC<ICheckout> = ({ }) => {

    const [myBag, setMyBag] = useState<MyBag[] | []>([])
    const [isLoading, setIsLoading] = useState(false)

    const [chosenCity, setChosenCity] = useState('')
    const [chosenZip, setChosenZip] = useState('')
    const [chosenAddress, setChosenAddress] = useState('')
    const [chosenName, setChosenName] = useState('')
    const [chosenSurname, setChosenSurname] = useState('')
    const [chosenPhone, setChosenPhone] = useState('')
    const [chosenEmail, setChosenEmail] = useState('')
    const [chosenTelegram, setChosenTelegram] = useState('')

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        let temp = localStorage.getItem('onekey-shopping-bag')

        if (temp) {
            const items = JSON.parse(temp)
            setMyBag(items)
        }

        // async function fetchMyAPI() {
        //     const fetchedCitites = await getCities()
        //     setCitites(fetchedCitites)

        // }

        // fetchMyAPI()


        // document.addEventListener('DOMContentLoaded', () => {
        //     if (window && window.CDEKWidget) {
        //         new window.CDEKWidget({ 
        //             from: 'Новосибирск',
        //             root: 'cdek-map',
        //             apiKey: '0a19f132-bc3e-4393-96e9-e05ba8d38f10',
        //             servicePath: 'http://84.201.168.94:80',
        //             defaultLocation: 'Новосибирск'
        //         })
        //     }

        // })

    }, [])


    const sumbitRequest = () => {


        if (!chosenCity) {
            toast.error('Поле "Город" обязателено к заполнению')
        } else if (!chosenZip) {
            toast.error('Поле "Индекс" обязателено к заполнению')
        } else if (!chosenAddress) {
            toast.error('Поле "Адрес" обязателено к заполнению')
        } else if (!chosenName) {
            toast.error('Поле "Имя" обязателено к заполнению')
        } else if (!chosenSurname) {
            toast.error('Поле "Фамилия" обязателено к заполнению')
        } else if (!chosenPhone) {
            toast.error('Поле "Телефон" обязателено к заполнению')
        } else if (!isValidPhoneNumber(chosenPhone)) {
            toast.error('Поле "Телефон" не валидное')
        } else if (!chosenEmail) {
            toast.error('Поле "Email" обязателено к заполнению')
        } else if (!isValidEmail(chosenEmail)) {
            toast.error('Поле "Email" не валидное')
        } else {
            setIsLoading(true)
            toast.success('Заявка принята в работу')
            setTimeout(() => {
                setIsLoading(false)
            }, 3000)
        }


        // console.log('chosenCity: ' + chosenCity)
        // console.log('chosenZip: ' + chosenZip)
        // console.log('chosenAddress: ' + chosenAddress)
        // console.log('Name: ' + chosenName)
        // console.log('Surname: ' + chosenSurname)
        // console.log('chosenPhone: ' + chosenPhone)
        // console.log('chosenEmail: ' + chosenEmail)
        // console.log('chosenTelegram: ' + chosenTelegram)
    }


    return (
        <>
            <header className="bg-checkout">
                <div className="max-w-7xl m-auto px-6 py-4">
                    <Link to={'/'}>
                        <img src={logo} alt="LeeBlock" className="h-10" />
                    </Link>
                </div>
            </header>
            {/* <div id="cdek-map" className="w-[800px] h-[600px]"></div> */}
            <main className="bg-checkout">
                <div className="max-w-7xl m-auto px-6 py-4">
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-y-6 gap-x-6 pb-10 ">
                        <aside className="grid gap-y-6 lg:gap-y-8">
                            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                <h2 className="text-xl font-bold text-h-checkout mb-4">Адрес доставки</h2>
                                <div className="grid sm-mobile:grid-cols-21 gap-x-2 gap-y-3 mb-3">
                                    <CityInput chosenCity={chosenCity} setChosenCity={setChosenCity} />
                                    <InputCustom type="text" label="Индекс" value={chosenZip} placeholder="101000" onChangeFunc={setChosenZip} />
                                </div>
                                <InputCustom type="text" label="Адрес" value={chosenAddress} placeholder="ул. Зоологическая 2" onChangeFunc={setChosenAddress} />
                            </div>
                            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                <h2 className="text-xl font-bold text-h-checkout mb-4">Ваши данные</h2>
                                <div className="grid sm-mobile:grid-cols-21 gap-x-2 gap-y-3 mb-3">
                                    <InputCustom type="text" label="Имя" value={chosenName} placeholder="Иван" onChangeFunc={setChosenName} />
                                    <InputCustom type="text" label="Фамилия" value={chosenSurname} placeholder="Иванов" onChangeFunc={setChosenSurname} />
                                </div>
                                <div className="grid sm-mobile:grid-cols-21 gap-x-2 gap-y-3 mb-3">
                                    <InputCustom type="text" label="Телефон" value={chosenPhone} placeholder="+79653332211" onChangeFunc={setChosenPhone} />
                                    <InputCustom type="text" label="Telegram" value={chosenTelegram} placeholder="@" onChangeFunc={setChosenTelegram} notRequired={true} />
                                </div>
                                <InputCustom type="text" label="Email" value={chosenEmail} placeholder="example@mail.ru" onChangeFunc={setChosenEmail} />
                            </div>
                            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                <h2 className="text-xl font-bold text-h-checkout mb-4">Способ доставки</h2>

                            </div>
                            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                <h2 className="text-xl font-bold text-h-checkout mb-4">Способ оплаты</h2>

                            </div>
                            <div className="flex gap-4 flex-col-reverse lg:flex-row">
                                <div>
                                    <button
                                        className="button-gradient w-full py-4 px-6 rounded-3xl flex justify-center items-center whitespace-nowrap font-bold"
                                        onClick={sumbitRequest}>
                                        Подтвердить заказ
                                    </button>
                                </div>
                                <div className="text-xs">
                                    Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей <span className="underline">политика конфиденциальности</span>.
                                </div>
                            </div>
                        </aside>
                        <aside>
                            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : ''} p-6 rounded-3xl checkout-block-shadow`}>
                                <h2 className="text-xl font-bold mb-4">Корзина</h2>
                                <div className="mb-6">
                                    {
                                        myBag?.map((item: MyBag, i: number) => {
                                            return <CheckoutItem key={i} item={item} />
                                        })
                                    }
                                </div>
                                <div className="mb-6">
                                    <h2 className="text-lg font-bold mb-4">Промокод</h2>
                                    <div className="grid grid-cols-21 gap-x-2">
                                        <div>
                                            <input type="text" className="border p-2 rounded-lg w-full outline-none" placeholder="Код купона" />
                                        </div>
                                        <div>
                                            <button className="button-gradient w-full p-2 rounded-lg flex justify-center items-center">Применить</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#5AE28C21] p-4 rounded-xl md:rounded-3xl">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-bold">Итого</div>
                                        <div className="text-xl font-bold">{getTotalSum(myBag)}&#x20bd;</div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Checkout