import { FC, useState, useEffect } from "react";
import { toast } from 'sonner'
import { InputWrapper, Input, Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { sendEmailCallRequired } from "../../utils/email";


interface IPreorderForm {
    opened: boolean
    close: any
    productName: string
}

const PreorderForm: FC<IPreorderForm> = ({ opened, close, productName }) => {
    const [isDisabled, setButtonDisabled] = useState(false)

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
        try {
            let res = await sendEmailCallRequired(form.values.name, form.values.phone, 'Предзаказ', productName)
            if (!res || res?.status !== 200) {
                toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
            } else {
                toast.success('С Вами свяжутся в ближайшее время.')
            }
        } catch (e) {
            console.log(e)
        } finally {
            setButtonDisabled(false);
            close()
        }
    };

    return (
        <>
            <Modal opened={opened} onClose={close} title="Оформить предзаказ" centered radius='md' padding={25} styles={{
                title: { fontSize: '20px' },
            }}>
                <div>
                    <h3 className="text-gray-500 mb-3">Оставьте свои данные и мы свяжемся с вами</h3>
                    <InputWrapper label="Имя" required className="mb-3">
                        <Input
                            placeholder="Иван"
                            name="name"
                            autoComplete="name"
                            {...form.getInputProps('name')}
                            radius="md"
                            className="bg-transparent"
                        />
                    </InputWrapper>
                    <InputWrapper label="Телефон" required className="mb-4">
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
                    <div className="grid">
                        <Button
                            onClick={submitForm}
                            disabled={isDisabled}
                            radius="md"
                            loaderProps={{ type: 'dots' }}
                            className="w-full"
                        >
                            Оформить предзаказ
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default PreorderForm