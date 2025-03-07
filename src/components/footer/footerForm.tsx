import { FC, useState } from "react";
import { Toaster, toast } from 'sonner';
import { InputWrapper, Input, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { sendEmailCallRequired } from "../../utils/email";

interface IFooterForm { }

const FooterForm: FC<IFooterForm> = ({ }) => {
    const [isDisabled, setButtonDisabled] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            phone: '',
        },
        validate: {
            name: (value: string) => (value ? null : 'Поле "Имя" обязательно к заполнению'),
            phone: (value: string) => (value ? null : 'Поле "Телефон" обязательно к заполнению'),
        },
    });

    const submitForm = async () => {
        if (form.validate().hasErrors) {
            toast.error('Пожалуйста, заполните все обязательные поля корректно.');
            return;
        }
        setButtonDisabled(true);
        const res = await sendEmailCallRequired(form.values.name, form.values.phone, 'Обратный звонок');

        if (!res || res?.status !== 200) {
            toast.error('Что-то пошло не так. Попробуйте снова через несколько минут.');
        } else {
            toast.success('С Вами свяжутся в ближайшее время.');
            form.reset();
        }
        setButtonDisabled(false);
    };

    return (
        <>
            <div className="grid md:justify-end">
                <span className="text-xs mb-2 text-[#45E555]">Заказать обратную связь?</span>
                <div className="grid tablet:grid-cols-221 gap-y-2 tablet:gap-x-2 items-end">
                    <InputWrapper label="Имя" required>
                        <Input
                            placeholder="Иван"
                            name="name"
                            autoComplete="name"
                            {...form.getInputProps('name')}
                            radius="md"
                            className="bg-transparent"
                        />
                    </InputWrapper>
                    <InputWrapper label="Телефон" required>
                        <Input
                            placeholder="+7 (999) 999-99-99"
                            autoComplete="tel"
                            value={form.values.phone}
                            onChange={(e) => form.setFieldValue('phone', e.target.value)}
                            radius='md'
                            style={{
                                backgroundColor: 'transparent',

                            }}
                        />
                    </InputWrapper>
                    <Button
                        onClick={submitForm}
                        disabled={isDisabled}
                        radius="md"
                        loaderProps={{ type: 'dots' }}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
            <Toaster richColors position="top-right" />
        </>
    );
};

export default FooterForm;