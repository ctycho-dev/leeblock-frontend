import { FC, useState } from "react";
import { Toaster, toast } from 'sonner'
import ReactLoading from 'react-loading';
import { sendEmailNeedHelp } from "../utils/email";

interface IHelp { }

const Help: FC<IHelp> = ({ }) => {
    const [isHelpNeeded, setIsHelpNeeded] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [isDisabled, setButtonDisabled] = useState(false)

    const submitForm = async () => {
        setButtonDisabled(true)

        const res = await sendEmailNeedHelp(name, email, question)

        if (!res || res?.status !== 200) {
            toast.error('Что то пошло не так. Попробуйте снова через несколько минут.')
        } else {
            toast.success('С Вами свяжутся в ближайшее время.')
            setName('')
            setEmail('')
            setQuestion('')
            setIsHelpNeeded(false)
        }
        setButtonDisabled(false)
    }

    return (
        <>
            <div className={`fixed bottom-4 right-4 z-50 ${isHelpNeeded ? 'hidden' : ''}`}>
                <div className={`bg-gray-800 py-3 px-4 rounded-3xl flex items-center gap-x-2 border-2 border-gray-500 md:border-0 transition-opacity duration-100
                    hover:cursor-pointer`}
                    onClick={() => { setIsHelpNeeded(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" xmlSpace="preserve" aria-hidden="true" fill="#fff"><g></g><g></g><g></g><g><g><g><path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"></path><circle cx="10" cy="15" r="1"></circle></g><path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"></path></g></g></svg>
                    <span className="text-white hidden md:block">Help</span>
                </div>
            </div>
            <div className={`fixed bottom-0 right-0 left-0 top-0 tablet:bottom-4 tablet:left-auto tablet:right-4 tablet:top-auto z-50
                ${isHelpNeeded ? '' : 'hidden'}`}>
                <div className="w-full h-full tablet:w-96 shadow-custom bg-white tablet:rounded-lg">
                    <div className="bg-black text-white p-4 flex justify-between items-center tablet:rounded-t-lg">
                        <div className="font-bold">Оставьте сообщение</div>
                        <div className="py-2 hover:cursor-pointer" onClick={() => { setIsHelpNeeded(false) }}>
                            <div className="w-3 h-[2px] bg-white rounded-lg"></div>
                        </div>
                    </div>
                    <div className="h-96 overflow-scroll p-4">
                        <div className="mb-4">
                            <label className="font-bold text-base">Ваше имя</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="border p-2 rounded-lg w-full outline-none mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="font-bold text-base">Почта</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="border p-2 rounded-lg w-full outline-none mt-2" />
                        </div>
                        <div>
                            <label className="font-bold text-base">Какой у вас вопрос?</label>
                            <textarea
                                value={question}
                                onChange={(e) => { setQuestion(e.target.value) }}
                                className="border p-2 rounded-lg w-full outline-none mt-2 h-32" />
                        </div>
                    </div>
                    <div className="tablet:bg-white flex px-4 tablet:py-4 justify-between rounded-b-lg tablet:shadow-custom tablet:border-t">
                        <div></div>
                        <div>
                            <button className="flex gap-x-2 items-center bg-black text-white py-2 px-4 rounded-lg font-bold text-sm disabled:pointer-events-none disabled:opacity-50" onClick={submitForm} disabled={isDisabled}>
                                Отправить
                                {
                                    isDisabled ?
                                        <ReactLoading type='spinningBubbles' color='#fff' height={'20px'} width={'20px'} />
                                        : ''
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Help