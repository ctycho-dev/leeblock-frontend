import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Help from "../components/help";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CheckoutItem from "../components/checkout/checkoutItem";
import CustomerDetails from "../components/checkout/customerDetails";
import PromoCodeSection from "../components/checkout/PromoCodeSection";
import TotalSection from "../components/checkout/TotalSection";
import { Button } from "@mantine/core";
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { MyBag, DataType } from "../types";
import { isValidEmail } from "../utils";
import { initPayment } from "../utils/tinkoff";
import { Toaster, toast } from 'sonner';
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { City, CityForm } from "../types";
import { Delivery } from "../components/checkout/delivery";
import { getBasket, getDiscount, selectTotalSumAfterDiscount } from '../features/bugsSlice';
import { useSelector } from 'react-redux';



declare global {
    interface Window {
        CDEKWidget: any;
    }
}

interface ICheckout { }

const Checkout: FC<ICheckout> = ({ }) => {
    const [isDisabled, setButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [deliveryPoint, setDeliveryPoint] = useState('');
    const [showMap, setShowMap] = useState(false);
    const [finalPrice, setFinal] = useState(0);
    const basket = useSelector(getBasket);
    const discount = useSelector(getDiscount);
    const sumAfterDiscount = useSelector(selectTotalSumAfterDiscount);



    const form = useForm({
        initialValues: {
            city: null as CityForm | null,
            zip: '',
            address: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            telegram: ''
        },
        validate: {
            city: (value: CityForm | null) => (value ? null : 'Город обязателен'),
            zip: (value: string) => (value ? null : 'Индекс обязателен'),
            address: (value: string) => (value ? null : 'Адрес обязателен'),
            name: (value: string) => (value ? null : 'Имя обязательно'),
            surname: (value: string) => (value ? null : 'Фамилия обязательна'),
            phone: (value: string) => (value ? null : 'Телефон обязателен'),
            email: (value: string) => (isValidEmail(value) ? null : 'Некорректный email'),
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const body = document.querySelector('body');
        if (body) body.style.overflow = 'auto';

        setTimeout(() => setIsRendered(true), 1000);
    }, []);

    const submitRequest = async () => {
        if (form.validate().hasErrors) {
            toast.error('Пожалуйста, заполните все обязательные поля корректно.');
            return;
        }
        setButtonDisabled(true);

        const discountFactor = 1 - discount.discount_value / 100
        const items = basket.map((x: MyBag) => {
            let price = x.sku.price * discountFactor * 100;
            return {
                'Name': x.sku.name,
                'Price': price,
                'Quantity': x.quantity,
                'Amount': price * x.quantity,
                'Tax': 'vat10'
            };
        });

        const data: DataType = {
            "Amount": sumAfterDiscount * 100,
            "DATA": {
                "Phone": form.values.phone,
                "Email": form.values.email
            },
            "Receipt": {
                "Email": "info@leeblock.ru",
                "Phone": "+79655829966",
                "Taxation": "osn",
                "Items": items
            },
            'city': form.values.city?.value,
            'zip': form.values.zip,
            'address': deliveryPoint || form.values.address,
            'first_name': form.values.name,
            'last_name': form.values.surname,
            'phone': form.values.phone,
            'email': form.values.email
        };

        if (discount.id) {
            data['promo_code_id'] = discount.id
        }

        const res = await initPayment(data)
        if (res && res.Success) {
            localStorage.setItem('PaymentId', res.PaymentId)
            localStorage.setItem('OrderId', res.OrderId)
            window.location.href = res.PaymentURL;
        } else {
            toast.error(res?.Details)
        }
        setButtonDisabled(false);
    };

    return (
        <>
            <main className="bg-checkout">
                <Header />
                <div className="max-w-7xl m-auto px-6 py-8">
                    {basket.length ? (
                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-y-6 gap-x-6 pb-10">
                            <aside className="grid gap-y-4 lg:gap-y-6">
                                <CustomerDetails form={form} isLoading={isLoading} />
                                <Delivery
                                    myBag={basket}
                                    form={form}
                                    setShowMap={setShowMap}
                                    deliveryPoint={deliveryPoint}
                                    setDeliveryPoint={setDeliveryPoint}
                                    setDeliveryPrice={setDeliveryPrice}
                                />
                                <div className="grid gap-y-2">
                                    <Button
                                        size="md"
                                        disabled={isDisabled}
                                        loaderProps={{ type: 'dots' }}
                                        radius="lg"
                                        className="w-full"
                                        onClick={submitRequest}
                                    >
                                        Подтвердить заказ
                                    </Button>
                                    <div className="text-xs">
                                        Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей <Link to='/politika' className="underline">политика конфиденциальности</Link>.
                                    </div>
                                </div>
                            </aside>
                            <aside>
                                {/* <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : ''} p-6 rounded-3xl checkout-block-shadow`}> */}
                                <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : ''} p-6 rounded-3xl bg-white shadow-md`}>
                                    <h2 className="text-xl font-bold mb-4">Корзина</h2>
                                    <div className="mb-6">
                                        <CheckoutItem isRendered={isRendered} myBag={basket} />
                                    </div>
                                    <PromoCodeSection
                                        isRendered={isRendered}
                                    />
                                    <TotalSection
                                        isRendered={isRendered}
                                        discount={discount}
                                        deliveryPrice={deliveryPrice}
                                    />
                                </div>
                            </aside>
                        </div>
                    ) : (
                        <div className="py-24">
                            <h1 className="text-4xl fonr-bold mb-10">В корзине пока нет товара,<br />давай это исправим!</h1>
                            <Link
                                to={'/catalog'}
                                className={`w-max flex gap-x-2 items-center justify-center h-12 text-white font-bold bg-gradient-to-r from-green-400 via-green-600 to-green-800 py-8 px-6 rounded-xl transition-all duration-200 hover:-mt-[2px] hover:mb-[2px] hover:cursor-pointer`}
                            >
                                Начать покупку <IoIosArrowForward className="text-2xl" />
                            </Link>
                        </div>
                    )}
                </div>
                <div className={`${showMap ? '' : 'hidden'} bg-sidebar fixed top-0 right-0 left-0 bottom-0 overflow-hidden z-[100] flex items-center justify-center`}>
                    <div className="bg-white rounded-2xl p-4 mx-2">
                        <div className="flex justify-end" onClick={() => { setShowMap(false) }}><IoClose className="text-2xl" /></div>
                        <div id="cdek-map" className="h-[600px] w-[90vw] ipad-air:w-[800px] mx-auto sm:mx-2"></div>
                    </div>
                </div>
            </main>
            <Footer />
            <Help />
            <Toaster richColors position="top-right" />
        </>
    );
};

export default Checkout;