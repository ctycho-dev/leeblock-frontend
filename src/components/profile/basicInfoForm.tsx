import React, { FC, useEffect, useState } from "react";
import { Toaster, toast } from 'sonner'
import { IUser } from "../../types";
import { updateUser } from "../../utils/users";
import Button from '@mui/material/Button';



interface BasicInfoFormProps {
    user: IUser
    editable: boolean
    setEditable: React.Dispatch<React.SetStateAction<boolean>>
}

const BasicInfoForm: FC<BasicInfoFormProps> = ({ user, editable, setEditable }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        setFirstName(user.first_name ? user.first_name : '')
        setLastName(user.last_name ? user.last_name : '')
        setPhone(user.phone ? user.phone : '')
    }, [])

    const submitChanges = async (e: any) => {
        e.preventDefault()
        console.log(firstName, lastName, phone)
        if (
            firstName === user.first_name &&
            lastName === user.last_name &&
            phone === user.phone
        ) {
            toast.info('Данные не изменились')
        } else {
            const res = await updateUser(firstName, lastName, phone)
            if (res && res.status == 200) {
                toast.success('Данные обновлены')
            } else {
                toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
            }
            setEditable(!editable)
        }
    }

    return (
        <>
            <form onSubmit={submitChanges}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium dark:text-white">Имя</label>
                        <input
                            type="text"
                            id="first_name"
                            className="outline-[#2e7d32] text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                            disabled={!editable}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium dark:text-white">Фамилия</label>
                        <input
                            type="text"
                            id="last_name"
                            className="outline-[#2e7d32] text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                            disabled={!editable}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        className="outline-[#2e7d32] text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white"
                        placeholder="+7 965 555 44 33"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                        disabled={!editable}
                    />
                </div>
                {
                    editable ?
                        <div className="mb-6">
                            <Button variant="contained" color="success" type="submit" disabled={!editable}>Обновить</Button>
                        </div>
                        : ''
                }
                {/* <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border rounded-sm focus:ring-3 focus:ring-blue-300 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline text-blue-500">terms and conditions</a>.</label>
                    </div> */}
            </form>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default BasicInfoForm