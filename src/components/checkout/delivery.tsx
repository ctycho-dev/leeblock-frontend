import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { UseFormReturnType } from "@mantine/form";
import { Button } from "@mantine/core";

import { getTariffCalculations } from "../../utils/cdek";
import { MyBag, DelivetyType, City, CityForm } from "../../types";

import { IoMdCloudDone } from "react-icons/io";
import cdek from '../../assets/cdek-1.svg'

interface DeliveryProps {
    form: UseFormReturnType<{
        city: CityForm | null;
        zip: string;
        address: string;
        name: string;
        surname: string;
        phone: string;
        email: string;
        telegram: string;
    }>;
    myBag: MyBag[]
    setShowMap: Dispatch<SetStateAction<boolean>>
    deliveryPoint: string
    setDeliveryPoint: Dispatch<SetStateAction<string>>
    setDeliveryPrice: Dispatch<SetStateAction<number>>
}

export const Delivery: React.FC<DeliveryProps> = ({ form, myBag, setShowMap, deliveryPoint, setDeliveryPoint, setDeliveryPrice }) => {
    const [isCalculating, setIsCalculating] = useState(false)
    const [deliveryCalculation, setDeliveryCalculation] = useState<[] | null>(null)
    const [deliveryOption, setDeliveryOption] = useState(-1)
    const [initialCity, setInitialCity] = useState<CityForm | null>(null)

    useEffect(() => {
        const currentCity = form.values.city;
        if (!currentCity) return;

        // Check if the city has changed
        if (!initialCity || JSON.stringify(currentCity) !== JSON.stringify(initialCity)) {
            setInitialCity(currentCity);
            setIsCalculating(true);
            setDeliveryPoint('');

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
                    defaultLocation: currentCity ? currentCity.label : 'Казань',
                    onChoose(type: any, two: any, data: any) {
                        if (data && data.address && data.name) {
                            setDeliveryPoint(data.name + ' : ' + data.address)
                        }
                    },
                });
            }

            getCalculation();
        }
    }, [form.values.city]);

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
            city_name: form.values.city?.label,
            city_code: form.values.city?.value,
            address: form.values.address,
            city_zip: form.values.zip,
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

    const handleDeliveryOption = (option: number) => {
        if (!deliveryCalculation) {
            return
        }
        setDeliveryOption(option)
        setDeliveryPrice(deliveryCalculation[option]['data']['total_sum'])
    }

    return (
        <div className={`${isCalculating ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl shadow-md`}>
            <h2 className="text-xl font-bold text-h-checkout mb-4">Способ доставки</h2>
            <div className="grid gap-y-2">
                {
                    deliveryCalculation?.map((item: DelivetyType, i: number) => {
                        return (
                            <div key={item.name}>
                                <div
                                    className={`border py-2 px-4 rounded-2xl ${deliveryOption == i ? 'border-green-700' : ''} hover:cursor-pointer`}
                                    onClick={() => handleDeliveryOption(i)}>
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
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                                {
                                    [136, 482].includes(item.code) && deliveryOption == i ?
                                        <div className="mt-2 grid">
                                            {
                                                deliveryPoint ? <div className="mb-2">{deliveryPoint.split(':')[0]}</div> : ''
                                            }
                                            <Button
                                                size="md"
                                                variant="light"
                                                loaderProps={{ type: 'dots' }}
                                                color="green"
                                                className="w-full"
                                                radius="md"
                                                onClick={() => { setShowMap(true) }}
                                            >Выбрать ПВЗ</Button>
                                        </div>
                                        : null
                                }
                            </div>
                        )
                    })
                }
                {deliveryCalculation && (<div className="text-xs mt-2">
                    После подтверждения заказа, в течение 24 часов, с Вами свяжется менеджер и уточнит точный адрес доставки. Цена за доставку предоставляется сервисом СДЕК
                </div>)}
            </div>
            {!deliveryCalculation && (
                <span>Введите свой адрес для просмотра параметров доставки.</span>
            )}
        </div>
    )
}