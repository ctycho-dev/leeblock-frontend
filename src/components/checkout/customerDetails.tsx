import { FC, useEffect, useState } from "react";
import { InputWrapper, Input, Select } from "@mantine/core"; // Use TextInput instead of Input
import { UseFormReturnType } from "@mantine/form";
import { City, CityForm } from "../../types";
import { getCities } from "../../utils/rest";

interface ICustomerDetails {
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
    isLoading: boolean;
}

const CustomerDetails: FC<ICustomerDetails> = ({ form, isLoading }) => {
    const [cities, setCities] = useState<CityForm[]>([]); // Initialize cities as an empty array

    useEffect(() => {
        async function fetchMyAPI() {
            if (!cities.length) {
                try {
                    const fetchedCities = await getCities(); // Fetch cities
                    const citiesForSelect = fetchedCities.map((city: City) => ({
                        value: city.code.toString(), // Convert city.code to string
                        label: city.name, // Use city.name as the label
                    }));
                    setCities(citiesForSelect); // Set the transformed cities
                } catch (error) {
                    console.error("Error fetching cities:", error);
                }
            }
        }
        fetchMyAPI();
    }, []);

    return (
        <div
            className={`${isLoading ? "bg-gray-100 opacity-50 pointer-events-none" : "bg-white"} p-6 rounded-3xl shadow-md`}
        >
            <h2 className="text-xl font-bold text-h-checkout mb-4">Ваши данные</h2>
            <div className="grid md:grid-cols-2 gap-2 mb-2">
                <Select
                    required
                    label="Адрес доставки"
                    placeholder="Москва"
                    data={cities}
                    searchable
                    radius="md"
                    onChange={(value) => {
                        const selectedCity = cities.find(city => city.value === value);
                        if (selectedCity) {
                            form.setFieldValue('city', selectedCity); // Store both value and label
                        }
                    }}
                />
                <InputWrapper label="Индекс" required>
                    <Input
                        placeholder="101000"
                        {...form.getInputProps("zip")}
                        radius="md"
                        name="postal-code"
                        autoComplete="postal-code"
                    />
                </InputWrapper>
            </div>
            <InputWrapper label="Адрес" required className="mb-2">
                <Input
                    placeholder="ул. Зоологическая 2"
                    {...form.getInputProps("address")}
                    radius="md"
                    name="address"
                />
            </InputWrapper>
            <div className="grid sm-mobile:grid-cols-2 gap-x-2 gap-y-3 mb-3">
                <InputWrapper label="Имя" required>
                    <Input
                        placeholder="Иван"
                        name="first-name"
                        autoComplete="first-name"
                        {...form.getInputProps('name')}
                        radius='md'
                    />
                </InputWrapper>
                <InputWrapper label="Фамилия" required>
                    <Input
                        placeholder="Иванов"
                        name="last-name"
                        autoComplete="last-name"
                        {...form.getInputProps('surname')}
                        radius='md'
                    />
                </InputWrapper>
            </div>
            <div className="grid sm-mobile:grid-cols-2 gap-x-2 gap-y-3 mb-3">
                <InputWrapper label="Телефон" required>
                    <Input
                        placeholder="+7 (999) 999-99-99"
                        autoComplete="tel"
                        value={form.values.phone}
                        onChange={(e) => form.setFieldValue('phone', e.target.value)}
                        radius='md'

                    />
                </InputWrapper>
                <InputWrapper label="Telegram">
                    <Input
                        placeholder="@"
                        autoComplete="username"
                        {...form.getInputProps('telegram')}
                        radius='md'
                    />
                </InputWrapper>
            </div>
            <InputWrapper label="Email" required>
                <Input
                    placeholder="example@mail.ru"
                    name="email"
                    autoComplete="email"
                    {...form.getInputProps('email')}
                    radius='md'
                />
            </InputWrapper>
        </div>
    );
};

export default CustomerDetails;