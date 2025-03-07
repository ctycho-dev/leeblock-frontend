import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postLogin } from "../utils/users";
import { useAuth } from '../authProvider';
import { Toaster, toast } from 'sonner';
import logo from '../assets/logoShort.svg';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button } from '@mantine/core';

const Login = () => {
    const [isDisabled, setButtonDisabled] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: string) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
        },
    });

    const handleSubmit = async (values: { email: string; password: string }) => {
        setButtonDisabled(true);

        const res = await postLogin(values.email, values.password);

        if (!res || res?.status !== 200) {
            toast.error('Неверные данные');
        } else {
            login(res.data.access_token);
            form.reset();
            navigate('/');
        }
        setButtonDisabled(false);
    };

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="px-6 py-12 lg:px-8">
                    <div className="w-[500px]">
                        <Link to={'/'}>
                            <img
                                alt="Your Company"
                                src={logo}
                                className="mx-auto h-10 w-auto"
                            />
                        </Link>
                        <h2 className="mt-4 mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            Войдите в свой аккаунт
                        </h2>

                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                label="Почта"
                                placeholder="Ваш email"
                                required
                                radius='md'
                                name="email"
                                autoComplete="email"
                                {...form.getInputProps('email')}
                            />
                            <PasswordInput
                                label="Пароль"
                                placeholder="Ваш пароль"
                                required
                                radius='md'
                                mt="md"
                                {...form.getInputProps('password')}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                mt="xl"
                                radius='md'
                                disabled={isDisabled}
                                loading={isDisabled}
                            >
                                Войти
                            </Button>
                        </form>
                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Нет зарегестрированы?{' '}
                            <Link to={'/signup'} className="font-semibold text-green-700 hover:text-green-600">
                                Создать учетную запись
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Toaster richColors position="top-right" />
        </>
    );
};

export default Login;