import { FC, useState, useEffect, useRef } from "react";
import { Toaster, toast } from 'sonner'
import {
    Select,
    Modal,
    Input,
    TextInput,
    PasswordInput,
    NumberInput,
    Checkbox,
    Button,
    Box,
    Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { postSignup } from "../../utils/users"
import axios from "axios";
import { IUser } from "../../types";

interface BloggersProps {
}


const Bloggers: FC<BloggersProps> = ({ }) => {
    const [opened, { open, close }] = useDisclosure(false);

    const [value, setValue] = useState<string | null>('');
    const [users, setUsers] = useState<IUser[] | []>([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND}/users`)
            .then(res => {
                setUsers(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            phone: ''
        },

        validate: {
            email: isEmail('Invalid email'), // Validate email format
            password: isNotEmpty('Password is required'), // Validate password is not empty
        },
    });

    const handleSubmit = async (values: any) => {
        const res = await postSignup(
            values.email,
            values.password,
            values.first_name,
            values.last_name,
            values.phone
        )
        if (res && res?.status === 409) {
            toast.error('Пользователь с таким email уже существует')
        }
        else if (res && res?.status === 201) {
            toast.success('Пользователь создан.')
            close()
        }
        else {
            toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
        }
    };

    return (
        <>
        <div className="w-full overflow-auto mb-6">
                {

                    users.length ?
                        <table className="w-full group min-w-[500px]">
                            <thead>
                                <tr className="border-b border-[#BDBFC0]">
                                    <th className="text-start py-2">Email</th>
                                    <th className="text-start py-2">First Name</th>
                                    <th className="text-start py-2">Last Name</th>
                                    <th className="text-start py-2">Phone</th>
                                </tr>
                            </thead>
                            <tbody className="dark:text-white">
                                {
                                    users.map((item, index) => {
                                        return (
                                            <tr key={`promo-${index}`} className="border-b border-[#BDBFC0]">
                                                <td className="py-4">{item.email}</td>
                                                <td className="py-4">{item.first_name}</td>
                                                <td className="py-4">{item.last_name}</td>
                                                <td className="py-4">{item.phone}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        : ''
                }
            </div>
            <Button variant="filled" color="green" onClick={open}>Создать блогера</Button>
            <Modal opened={opened} onClose={close} title="Создать промокод" centered>
                <Box maw={400} mx="auto">
                    <form onSubmit={form.onSubmit(handleSubmit)} className="grid gap-x-4">
                        <TextInput
                            label="Email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                            {...form.getInputProps('email')}
                            required
                            className="mb-2"
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Enter your password"
                            {...form.getInputProps('password')}
                            required
                            className="mb-2"
                        />
                        <TextInput
                            label="First Name"
                            placeholder="Enter your first name"
                            {...form.getInputProps('first_name')}
                            className="mb-2"
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter your last name"
                            {...form.getInputProps('last_name')}
                            className="mb-2"
                        />
                        <TextInput
                            label="Phone"
                            placeholder="Enter your phone number"
                            {...form.getInputProps('phone')}
                            className="mb-2"
                        />
                        <Group justify="flex-end" mt="md">
                            <Button type="submit">Create User</Button>
                        </Group>
                    </form>
                </Box>
                {/* <div className="grid gap-y-4">
                    <Input.Wrapper label="Название">
                        <Input styles={(theme) => ({
                            input: {
                                borderColor: theme.colors.gray[4],
                                '&:focus': {
                                    borderColor: theme.colors.green[6], // Green border on focus
                                    boxShadow: `0 0 0 2px ${theme.colors.green[2]}`, // Optional: Add a green focus ring
                                },
                            },
                        })}
                            placeholder="CODE" />
                    </Input.Wrapper>
                    <Select
                        color="green"
                        label="Тип скидки"
                        placeholder="Выберите значение"
                        data={['Процент', 'Фиксированная сумма']}
                        value={value} onChange={setValue}
                    />
                    <NumberInput
                        label="Размер скидки"
                        placeholder="Введите число"
                        min={0}
                        max={20}
                    />
                    <div className="flex gap-x-2">
                        <Button variant="filled" color="green" onClick={() => { }}>Создать</Button>
                        <Button variant="outline" color="green" onClick={close}>Отменить</Button>
                    </div>
                </div> */}
            </Modal>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Bloggers