import { FC, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner';
import DeleteIcon from '@mui/icons-material/Delete';
import { getPromocodes } from "../../utils/users";
import { IPromoCode } from "../../types";
import { useDisclosure } from '@mantine/hooks';
import { useForm, isNotEmpty } from '@mantine/form';
import {
    Modal,
    Input,
    Select,
    NumberInput,
    Button,
    Box,
    Group,
    Loader
} from '@mantine/core';
import axios from "axios";

interface PromocodeFormValues {
    name: string;
    discountType: string;
    discountValue: number;
    user: string;
}

interface PromocodesProps { }

const Promocodes: FC<PromocodesProps> = () => {
    const [promocodes, setPromocodes] = useState<IPromoCode[] | []>([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [users, setUsers] = useState<{ value: string; label: string }[]>([]); // Ensure `value` is a string
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getPromocodes();
            console.log(res)
            if (res && 'data' in res) {
                setPromocodes(res.data);
            }
        };

        fetchApi();
    }, []);

    useEffect(() => {
        if (opened) {
            setLoading(true);
            axios.get(`${process.env.REACT_APP_BACKEND}/users`)
                .then((res) => {
                    const selectUsers = res.data.map((user: { id: string; email: string }) => ({
                        value: user.id.toString(),
                        label: user.email,
                    }));
                    setUsers(selectUsers)
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [opened]);

    const form = useForm<PromocodeFormValues>({
        initialValues: {
            name: '',
            discountType: '',
            discountValue: 0,
            user: '',
        },

        validate: {
            name: isNotEmpty('Название обязательно'), // Validate name is not empty
            discountType: isNotEmpty('Тип скидки обязателен'), // Validate discount type is not empty
            discountValue: (value) => (value > 0 ? null : 'Размер скидки должен быть больше 0'), // Validate discount value
            user: isNotEmpty('Пользователь обязателен'), // Validate user is not empty
        },
    });

    // Handle form submission
    const handleSubmit = async (values: PromocodeFormValues) => {
        try {
            // Prepare the data to match the backend's expected format
            const promoCodeData = {
                code: values.name, // Assuming `name` is the promo code
                user_id: parseInt(values.user), // Convert `user` to a number
                discount_type: values.discountType === 'Процент' ? 'percentage' : 'fixed', // Map to backend values
                discount_value: values.discountValue,
            };
    
            // Send the data to the backend
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND}/promo`,
                promoCodeData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`
                    },
                }
            );
    
            // Handle success
            if (response.status === 200) {
                toast.success('Промокод успешно создан'); // Show success notification
                close(); // Close the modal
                form.reset(); // Reset the form
            } else {
                toast.error('Ошибка при создании промокода'); // Show error notification
            }
        } catch (error) {
            console.error('Error creating promo code:', error);
            toast.error('Ошибка при создании промокода'); // Show error notification
        }
    };

    return (
        <>
            <div className="w-full overflow-auto mb-6">
                {promocodes.length ? (
                    <table className="w-full group min-w-[500px]">
                        <thead>
                            <tr className="border-b border-[#BDBFC0]">
                                <th className="text-start py-2">Code</th>
                                <th className="text-start py-2">Discount type</th>
                                <th className="text-start py-2">Скидка</th>
                                <th className="text-start py-2">Использовался</th>
                                <th className="text-start py-2">Email</th>
                                {/* <th className="text-start py-2"></th> */}
                            </tr>
                        </thead>
                        <tbody className="dark:text-white">
                            {promocodes.map((item, index) => (
                                <tr key={`promo-${index}`} className="border-b border-[#BDBFC0]">
                                    <td className="py-4">{item.code}</td>
                                    <td className="py-4">{item.discount_type === 'percentage' ? '%' : '₽'}</td>
                                    <td className="py-4">{item.discount_value}</td>
                                    <td className="py-4">{item.used_count}</td>
                                    <td className="py-4">{item.user_email}</td>
                                    {/* <td>
                                        <DeleteIcon />
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    ''
                )}
            </div>
            <Button variant="filled" color="green" onClick={open}>
                Создать промокод
            </Button>
            <Modal opened={opened} onClose={close} title="Создать промокод" centered>
                <Box>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Input.Wrapper label="Название" required className="mb-2">
                            <Input
                                placeholder="CODE"
                                styles={(theme) => ({
                                    input: {
                                        borderColor: theme.colors.gray[4],
                                        '&:focus': {
                                            borderColor: theme.colors.green[6], // Green border on focus
                                            boxShadow: `0 0 0 2px ${theme.colors.green[2]}`, // Green focus ring
                                        },
                                    },
                                })}
                                {...form.getInputProps('name')}
                            />
                        </Input.Wrapper>

                        {/* Discount Type Field */}
                        <Select
                            label="Тип скидки"
                            placeholder="Выберите значение"
                            data={['Процент', 'Фиксированная сумма']}
                            {...form.getInputProps('discountType')}
                            required
                            className="mb-2"
                        />

                        {/* Discount Value Field */}
                        <NumberInput
                            label="Размер скидки"
                            placeholder="Введите число"
                            min={0}
                            max={20}
                            {...form.getInputProps('discountValue')}
                            required
                            className="mb-2"
                        />

                        {/* User Field */}
                        <Select
                            label="Пользователь"
                            placeholder={loading ? 'Загрузка...' : 'Выберите пользователя'}
                            data={users}
                            disabled={loading} // Disable the Select component while loading
                            rightSection={loading ? <Loader size="xs" /> : null} // Show a loader while loading
                            {...form.getInputProps('user')}
                            required
                            className="mb-2"
                        />

                        <Group justify="flex-end" mt="md">
                            <Button variant="filled" color="green" type="submit">
                                Создать
                            </Button>
                            <Button variant="outline" color="green" onClick={close}>
                                Отменить
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Modal>
            <Toaster richColors position="top-right" />
        </>
    );
};

export default Promocodes;