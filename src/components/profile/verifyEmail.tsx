import { FC, useState } from "react";
import { Toaster, toast } from 'sonner'
import { sendVerification } from "../../utils/users";
import Button from '@mui/material/Button';


interface VerifyEmailProps {
    email: string
    verified: boolean
}

const VerifyEmail: FC<VerifyEmailProps> = ({ email, verified }) => {

    const verifyEmail = async () => {
        try {
            await sendVerification()
            toast.success('Пиьсмо отправлено')
        } catch (e) {
            toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
        } 
    }

    return (
        <>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                    <span>Почта</span>
                    {
                        verified ? '' :
                            <span className="text-red-600 ml-1">(not verified)</span>
                    }
                </label>
                <input
                    type="email"
                    id="email" 
                    className="text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@company.com"
                    value={email}
                    disabled={true}
                />
            </div>
            {
                verified ? '' :
                <Button variant="contained" color="success" onClick={verifyEmail}>Подтвердить почту</Button>
            }
            <Toaster richColors position="top-right" />
        </>
    )
}

export default VerifyEmail