import { FC } from "react";

import CityInput from "./cityInput";
import InputCustom from "./inputCutom";

interface IAddressDetails {
    isLoading: boolean
    chosenCity: string
    setChosenCity: any
    chosenZip: string
    setChosenZip: any
    chosenAddress: string
    setChosenAddress: any
}

const AddressDetails: FC<IAddressDetails> = ({
    isLoading,
    chosenCity,
    setChosenCity,
    chosenZip,
    setChosenZip,
    chosenAddress,
    setChosenAddress
}) => {

    return (
        <>
            <div className={`${isLoading ? 'bg-gray-100 opacity-50 pointer-events-none' : 'bg-white'} p-6 rounded-3xl checkout-block-shadow`}>
                <h2 className="text-xl font-bold text-h-checkout mb-4">Адрес доставки</h2>
                <div className="grid sm-mobile:grid-cols-21 gap-x-2 gap-y-3 mb-3">
                    <CityInput chosenCity={chosenCity} setChosenCity={setChosenCity} />
                    <InputCustom type="text" name="postal-code" label="Индекс" value={chosenZip} placeholder="101000" onChangeFunc={setChosenZip} />
                </div>
                <InputCustom type="text" name="city"  label="Адрес" value={chosenAddress} placeholder="ул. Зоологическая 2" onChangeFunc={setChosenAddress} />
            </div>
        </>
    )
}

export default AddressDetails