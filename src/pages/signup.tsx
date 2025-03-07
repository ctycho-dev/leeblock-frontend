import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../utils/users"
import { Toaster, toast } from 'sonner'
import logo from '../assets/logoShort.svg'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isDisabled, setButtonDisabled] = useState(false)
    const [verify, setVerify] = useState(false)
    const [token, setToken] = useState(true)

    const navigate = useNavigate();


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        // if (password != confirmPassword) {
        //     toast.error('Пароли не совпадают.')
        //     return
        // }
        // setButtonDisabled(true)

        // const res = await postSignup(email, password)

        // if (res && res?.status === 409) {
        //     toast.error('Пользователь с таким email уже существует')
        // }
        // else if (res && res?.status !== 200) {
        //     setVerify(true)
        //     setToken(res?.data.password)
        // }
        // else {
        //     toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
        // }
        // setButtonDisabled(false)
    }

    return (
        <>
            {
                verify ?
                    <div className="w-screen h-screen flex items-center justify-center">
                        <div className="px-2">
                            <div className="font-bold mb-4">
                                Verification code was sent to provided email
                            </div>
                                <Link to='/' className='flex justify-center gap-x-3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Home</Link>
                        </div>
                    </div>
                    :
                    <div className="w-screen h-screen flex items-center justify-center">
                        <div className="px-6 py-12 lg:px-8">
                            <div className="w-[500px]">
                                <img
                                    alt="Your Company"
                                    src={logo}
                                    className="mx-auto h-10 w-auto"
                                />
                                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                    Создать новый профиль
                                </h2>
                            </div>

                            <div className="mt-10 w-[500px]">
                                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                            Почта
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Пароль
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Подтвердить пароль
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="confirm-password"
                                                name="confirm-password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                value={confirmPassword}
                                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center gap-x-3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:opacity-50"
                                            disabled={isDisabled}
                                        >
                                            Создать
                                            
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Login