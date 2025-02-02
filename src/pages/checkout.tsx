import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Help from "../components/help";
import HeaderSecond from "../components/header/headerSecond";
import Footer from "../components/footer/footer";
import InputCustom from "../components/inputCutom";
import CheckoutItem from "../components/checkoutItem";
import AddressDetails from "../components/addressDetails";

import { MyBag, DelivetyType } from "../types";
import { getTotalSum, isValidEmail, parseBagFromStorage } from "../utils";
import { initPayment } from "../utils/tinkoff";
import { Toaster, toast } from 'sonner'
import ReactLoading from 'react-loading';
import Skeleton from 'react-loading-skeleton'
import PhoneInput from 'react-phone-input-2'
import { IoIosArrowForward, IoMdCloudDone } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import cdek from '../assets/cdek-1.svg'

import { City } from "../types";
import { getTariffCalculations } from "../utils/cdek";

import * as CryptoJS from "crypto-js";


declare global {
    interface Window {
        CDEKWidget: any;
    }
}

interface ICheckout { }

const Checkout: FC<ICheckout> = ({ }) => {
    const [isDisabled, setButtonDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isRendered, setIsRendered] = useState(false)
    const [myBag, setMyBag] = useState<MyBag[] | []>([])

    const [chosenCity, setChosenCity] = useState<City | null>(null)
    const [chosenZip, setChosenZip] = useState('')
    const [chosenAddress, setChosenAddress] = useState('')
    const [chosenName, setChosenName] = useState('')
    const [chosenSurname, setChosenSurname] = useState('')
    const [chosenPhone, setChosenPhone] = useState('')
    const [chosenEmail, setChosenEmail] = useState('')
    const [chosenTelegram, setChosenTelegram] = useState('')

    const [isCalculating, setIsCalculating] = useState(false)
    const [deliveryCalculation, setDeliveryCalculation] = useState<[] | null>(null)
    const [deliveryOption, setDeliveryOption] = useState(0)
    const [deliveryPoint, setDeliveryPoint] = useState('')
    const [showMap, setShowMap] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)

        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        setMyBag(parseBagFromStorage())

        setTimeout(() => {
            setIsRendered(true)
        }, 1000)

    }, [])

    useEffect(() => {
        setDeliveryPoint('')
        if (chosenCity) {
            setIsCalculating(true)
            if (window && window.CDEKWidget) {
                new window.CDEKWidget({
                    from: {
                        country_code: 'RU',
                        city: 'Санкт-Петербург',
                        code: 137,
                    },
                    root: 'cdek-map',
                    apiKey: 'bad51c9b-3d1c-4809-b170-8a9c35aef92a',
                    servicePath: 'https://www.ghost-php-server.ru',
                    defaultLocation: chosenCity ? chosenCity.name : 'Казань',
                    onChoose(type: any, two: any, data: any) {
                        if (data && data.address && data.name) {
                            setDeliveryPoint(data.name + ' : ' + data.address)
                        }
                    },
                })
            }
            getCalculation()
        } else {
            setDeliveryCalculation(null)
        }
    }, [chosenCity])

    const getCalculation = async () => {
        let packages = []

        for (const item of myBag) {
            for (let i = 0; i < item.quantity; i++) {
                packages.push({
                    weight: item.sku.weight,
                    height: item.sku.height,
                    length: item.sku.length,
                    width: item.sku.width,
                })
            }
        }

        const data = {
            city_name: chosenCity?.name,
            city_code: chosenCity?.code,
            address: chosenAddress,
            city_zip: chosenZip,
            packages: packages
        }

        getTariffCalculations(data)
            .then((res) => {
                if (res && res.data) {
                    setDeliveryCalculation(res.data);
                }
                setIsCalculating(false)
            })
            .catch((error) => {
                console.error("Error fetching tariff calculations:", error);
                setIsCalculating(false)
            });
    }


    const sumbitRequest = async () => {
        // if (deliveryCalculation && [136, 482].includes(deliveryCalculation[deliveryOption]['code']) && !deliveryPoint) {
        //     toast.error('Выберите ПВЗ для доставки')
        //     return
        // }
        if (!chosenCity) {
            toast.error('Поле "Город" обязателено к заполнению')
            return
        } else if (!chosenZip) {
            toast.error('Поле "Индекс" обязателено к заполнению')
            return
        } else if (!chosenAddress) {
            toast.error('Поле "Адрес" обязателено к заполнению')
            return
        } else if (!chosenName) {
            toast.error('Поле "Имя" обязателено к заполнению')
            return
        } else if (!chosenSurname) {
            toast.error('Поле "Фамилия" обязателено к заполнению')
            return
        } else if (!chosenPhone) {
            toast.error('Поле "Телефон" обязателено к заполнению')
            return
        } else if (!chosenEmail) {
            toast.error('Поле "Email" обязателено к заполнению')
            return
        } else if (!isValidEmail(chosenEmail)) {
            toast.error('Поле "Email" не валидное')
            return
        }
        setButtonDisabled(true)

        let amount = 0

        const items = []
        for (const x of myBag) {
            // Сумма в копейках. Например, 3 руб. 12коп. — это число 312.
            let price = x.sku.price * 100
            items.push({
                'Name': x.sku.name,
                'Price': price,
                'Quantity': x.quantity,
                'Amount': price * x.quantity,
                'Tax': 'vat10'
            })
            amount += price * x.quantity
        }

        const data = {
            "Amount": amount,
            "DATA": {
                "Phone": chosenPhone,
                "Email": chosenEmail
            },
            "Receipt": {
                "Email": "info@leeblock.ru",
                "Phone": "+79655829966",
                "Taxation": "osn",
                "Items": items
            },
            'city': chosenCity.name,
            'zip': chosenZip,
            'address': deliveryPoint ? deliveryPoint : chosenAddress,
            'first_name': chosenName,
            'last_name': chosenSurname,
            'phone': chosenPhone,
            'email': chosenEmail
        }

        const res = await initPayment(data)
        if (res && res.Success) {
            localStorage.setItem('PaymentId', res.PaymentId)
            localStorage.setItem('OrderId', res.OrderId)
            // window.open(res.PaymentURL)
            window.location.href = res.PaymentURL;
        } else {
            toast.error(res?.Details)
        }
        setButtonDisabled(false)
    }

    return (
        <>
            <HeaderSecond />
            <main className="bg-checkout">
                <div className="max-w-7xl m-auto px-6 py-8">
                    {
                        myBag.length ?
                            <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-y-6 gap-x-6 pb-10 ">
                                <aside className="grid gap-y-6 lg:gap-y-8">
                                    <AddressDetails
                                        isLoading={isLoading}
                                        chosenCity={chosenCity}
                                        setChosenCity={setChosenCity}
                                        chosenZip={chosenZip}
                                        setChosenZip={setChosenZip}
                                        chosenAddress={chosenAddress}
                                        setChosenAddress={setChosenAddress}
                                    />
                                    <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                        <h2 className="text-xl font-bold text-h-checkout mb-4">Ваши данные</h2>
                                        <div className="grid sm-mobile:grid-cols-2 gap-x-2 gap-y-3 mb-3">
                                            <InputCustom type="text" name='name' label="Имя" value={chosenName} placeholder="Иван" onChangeFunc={setChosenName} />
                                            <InputCustom type="text" name='lname' label="Фамилия" value={chosenSurname} placeholder="Иванов" onChangeFunc={setChosenSurname} />
                                        </div>
                                        <div className="grid sm-mobile:grid-cols-21 gap-x-2 gap-y-3 mb-3">
                                            <div className="">
                                                <label className={'required'}>Телефон</label>
                                                <PhoneInput
                                                    country={'ru'}
                                                    value={chosenPhone}
                                                    containerClass={'mt-2 h-10 border rounded-lg'}
                                                    onChange={(e) => { setChosenPhone(e) }}
                                                />
                                            </div>
                                            <InputCustom type="text" name='' label="Telegram" value={chosenTelegram} placeholder="@" onChangeFunc={setChosenTelegram} notRequired={true} />
                                        </div>
                                        <InputCustom type="text" name='email' label="Email" value={chosenEmail} placeholder="example@mail.ru" onChangeFunc={setChosenEmail} />
                                    </div>
                                    <div className={`${isCalculating ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                                        <h2 className="text-xl font-bold text-h-checkout mb-4">Способ доставки</h2>
                                        <div className="grid gap-y-2">
                                            {
                                                deliveryCalculation?.map((item: DelivetyType, i: number) => {
                                                    return (
                                                        <div key={item.name}>
                                                            <div
                                                                className={`border py-2 px-4 rounded-2xl ${deliveryOption == i ? 'border-green-700' : ''} hover:cursor-pointer`}
                                                                onClick={() => setDeliveryOption(i)}>
                                                                <div className="flex justify-between items-center ">
                                                                    <div className="flex gap-x-2 items-center">
                                                                        <div><img src={cdek} alt="" className="w-14" /></div>
                                                                        <div className="text-sm md:text-base">{item.name}: {item.data.period_min} - {item.data.period_max} дня</div>
                                                                    </div>
                                                                    <div className="font-bold flex gap-x-1">
                                                                        {item.data.total_sum}&#8381;
                                                                        {
                                                                            deliveryOption == i ?
                                                                                <IoMdCloudDone className="text-2xl text-green-700" />
                                                                                : ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {
                                                                [136, 482].includes(item.code) && deliveryOption == i ?
                                                                    <div className="mt-2">
                                                                        {
                                                                            deliveryPoint ? <div className="mb-2">{deliveryPoint.split(':')[0]}</div> : ''
                                                                        }
                                                                        <button
                                                                            className={`w-full button-gradient py-2 rounded-2xl 
                                                                            flex justify-center items-center gap-x-2
                                                                            whitespace-nowrap font-bold
                                                                            disabled:pointer-events-none disabled:opacity-50`}
                                                                            onClick={() => { setShowMap(true) }}>
                                                                            Выбрать ПВЗ
                                                                        </button>
                                                                    </div>
                                                                    : ''
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {
                                            deliveryCalculation ? '' :
                                                'Введите свой адрес для просмотра параметров доставки.'
                                        }
                                    </div>
                                    <div className="grid gap-y-2">
                                        <div>
                                            <button
                                                className={`button-gradient w-full py-3 px-6 rounded-2xl 
                                                flex justify-center items-center gap-x-2
                                                whitespace-nowrap font-bold
                                                disabled:pointer-events-none disabled:opacity-50`}
                                                onClick={sumbitRequest}
                                                disabled={isDisabled}>
                                                Подтвердить заказ
                                                {
                                                    isDisabled ?
                                                        <ReactLoading type='spinningBubbles' color='#000' height={'20px'} width={'20px'} />
                                                        : ''
                                                }
                                            </button>
                                        </div>
                                        <div className="text-xs">
                                            Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей <Link to='/politika' className="underline ">политика конфиденциальности</Link>.
                                        </div>
                                    </div>
                                </aside>
                                <aside>
                                    <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : ''} p-6 rounded-3xl checkout-block-shadow`}>
                                        <h2 className="text-xl font-bold mb-4">Корзина</h2>
                                        <div className="mb-6">
                                            {
                                                isRendered ?
                                                    myBag?.map((item: MyBag, i: number) => {
                                                        return <CheckoutItem key={i} item={item} />
                                                    })
                                                    :
                                                    <>
                                                        <Skeleton
                                                            style={{
                                                                borderRadius: '0.375rem'
                                                            }}
                                                            baseColor='#fff'
                                                            className="h-[70px] rounded-2xl shadow-custom" />
                                                        <Skeleton
                                                            style={{
                                                                borderRadius: '0.375rem'
                                                            }}
                                                            baseColor='#fff'
                                                            className="h-[70px] rounded-2xl shadow-custom" />
                                                    </>
                                            }

                                        </div>
                                        <div className="mb-6">
                                            <h2 className="text-lg font-bold mb-4">Промокод</h2>
                                            <div className="grid grid-cols-21 gap-x-2">
                                                {
                                                    isRendered ?
                                                        <>
                                                            <div>
                                                                <input type="text" className="border p-2 rounded-xl w-full outline-none" placeholder="Код купона" />
                                                            </div>
                                                            <div>
                                                                <button className="button-gradient w-full p-2 rounded-xl flex justify-center items-center">Применить</button>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <Skeleton
                                                                style={{
                                                                    borderRadius: '0.375rem'
                                                                }}
                                                                baseColor='#fff'
                                                                className="h-[50px] rounded-2xl shadow-custom" />
                                                            <Skeleton
                                                                style={{
                                                                    borderRadius: '0.375rem'
                                                                }}
                                                                baseColor='#fff'
                                                                className="h-[50px] rounded-2xl shadow-custom" />
                                                        </>
                                                }
                                            </div>
                                        </div>
                                        {
                                            isRendered ?
                                                <div className="bg-[#5AE28C21] p-4 rounded-xl">
                                                    <div className="flex justify-between items-center">
                                                        <div className="text-lg font-bold">Итого</div>
                                                        <div className="text-xl font-bold">{getTotalSum(myBag)}&#x20bd;</div>
                                                    </div>
                                                </div>
                                                :
                                                <Skeleton
                                                    style={{
                                                        borderRadius: '0.375rem'
                                                    }}
                                                    baseColor='#fff'
                                                    className="h-[50px] rounded-2xl shadow-custom" />
                                        }
                                    </div>
                                </aside>
                            </div>
                            :
                            <div className="py-24">
                                <h1 className="text-4xl fonr-bold mb-10">В корзине пока нет товара,<br />давай это исправим!</h1>
                                <Link
                                    to={'/catalog'}
                                    className={`w-max flex gap-x-2 items-center justify-center h-12 text-white font-bold bg-gradient-to-r from-green-400 via-green-600 to-green-800
                            py-8 px-6 rounded-xl transition-all duration-200
                            hover:-mt-[2px] hover:mb-[2px] hover:cursor-pointer`}
                                >
                                    Начать покупку <IoIosArrowForward className="text-2xl" />
                                </Link>
                            </div>

                    }
                </div>
                <div className={`${showMap ? '' : 'hidden'}
                    bg-sidebar
                    fixed top-0 right-0 left-0 bottom-0
                    overflow-hidden z-[100] flex items-center justify-center`}>
                    <div className="bg-white rounded-2xl p-4 mx-2">
                        <div className="flex justify-end" onClick={() => { setShowMap(false) }}><IoClose className="text-2xl" /></div>
                        <div id="cdek-map"
                            className="h-[600px] w-[90vw] ipad-air:w-[800px] mx-auto sm:mx-2"
                        ></div>
                    </div>
                </div>
            </main>
            <Footer />
            <Help />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Checkout