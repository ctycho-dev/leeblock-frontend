import { FC, useEffect, useState } from "react";
import InputCustom from "./inputCutom";
import { getCities } from "../utils/rest";
import { Citites } from "../types";


interface ICityInput {
    chosenCity: string
    setChosenCity: any
}

const CityInput: FC<ICityInput> = ({ chosenCity, setChosenCity }) => {

    const [cities, setCitites] = useState<Citites[] | []>([])
    const [isFocused, setIsFocused] = useState(false);


    useEffect(() => {
        async function fetchMyAPI() {
            if (!cities.length) {
                const fetchedCitites = await getCities()
                setCitites(fetchedCitites)
            }
        }

        fetchMyAPI()

    }, [])


    const handleChange = (event: any) => {
        setChosenCity(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <div className="relative">
                <div>
                    <label className="required">Город</label>
                    <input
                        type="text"
                        placeholder='Москва'
                        value={chosenCity}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="border p-2 rounded-lg w-full outline-none mt-2"
                    />
                </div>
                {
                    isFocused ?
                        <div className='w-full z-10 absolute left-1/2 top-[75px] -translate-x-1/2'>
                            <ul className='bg-white border py-2 rounded-lg transition-all grid gap-y-2 max-h-[200px] overflow-scroll'>
                                {
                                    cities ?
                                        cities.map((item: Citites) => {
                                            if (
                                                !chosenCity ||
                                                item.name.includes(chosenCity)
                                            ) {
                                                return (
                                                    <li
                                                        key={item.code}
                                                        className="hover:bg-slate-100 px-4 py-2 hover:cursor-pointer"
                                                        onMouseDown={() => { setChosenCity(item.name) }}>
                                                        {item.name}
                                                    </li>
                                                )
                                            }
                                        })
                                        : ''
                                }
                            </ul>
                        </div>
                        : ''
                }
            </div>
        </>
    )
}

export default CityInput