import { FC, useState } from "react";
import { Input, Button } from "@mantine/core";
import { toast } from "sonner";
import Skeleton from 'react-loading-skeleton'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { applyDiscount, removeDiscount } from '../../features/bugsSlice';

interface PromoCodeSectionProps {
    isRendered: boolean;
}

const PromoCodeSection: FC<PromoCodeSectionProps> = ({ isRendered }) => {
    const [promoCode, setPromoCode] = useState("");
    const [promoCodeError, setPromoCodeError] = useState("");
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch();

    const applyPromoCode = async () => {
        if (!promoCode) {
            setPromoCodeError("Пожалуйста, введите промокод");
            return;
        }
        setIsDisabled(true)

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/promo/${promoCode}`);
            if (response.data) {
                const { id, discount_type, discount_value } = response.data;
                console.log(response.data)
                dispatch(applyDiscount({ id, discount_value }));
                // setDiscount({ type: discount_type, value: discount_value });
                setPromoCodeError("");
                toast.success("Промокод успешно применен");
            } else {
                toast.info("Промокод не найден или истек");
                setPromoCodeError("Промокод не найден или истек");
                // setDiscount(null);
            }
        } catch (error) {
            console.error("Error applying promo code:", error);
            setPromoCodeError("Ошибка при применении промокода");
            dispatch(removeDiscount());
        } finally {
            setIsDisabled(false)
        }
    };

    return (
        <div className="mb-6">
            {
                isRendered ?
                    <>
                        <h2 className="text-lg font-bold mb-4">Промокод</h2>
                        <div className="flex gap-x-2">
                            <Input
                                placeholder="Код купона"
                                radius='md'
                                value={promoCode}
                                onChange={(e) => {
                                    setPromoCode(e.target.value);
                                    setPromoCodeError("");
                                }}
                                error={promoCodeError}
                                className="flex-1"
                            />
                            <Button variant="filled" radius='md' color="green" onClick={applyPromoCode} disabled={isDisabled} loaderProps={{ type: 'dots' }}>
                                Применить
                            </Button>
                        </div>
                    </>
                    :
                    <>
                        <Skeleton
                            style={{
                                borderRadius: '0.375rem'
                            }}
                            baseColor='#fff'
                            className="h-[50px] rounded-2xl shadow-custom" />
                        <Skeleton
                            style={{
                                borderRadius: '0.375rem'
                            }}
                            baseColor='#fff'
                            className="h-[50px] rounded-2xl shadow-custom" />
                    </>
            }
        </div>

    );
};

export default PromoCodeSection;