import { FC } from "react";

interface IInputCustom {
    type: string
    label: string
    value: string
    placeholder: string
    name?: string
    onChangeFunc: any
    notRequired?: boolean
}

const InputCustom: FC<IInputCustom> = ({ type, label, value, placeholder, name, onChangeFunc, notRequired }) => {

    const handleChange = (event: any) => {
        onChangeFunc(event.target.value);
    };

    return (
        <>
            <div>
                <label className={notRequired ? '' : 'required'}>{label}</label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="border h-10 px-2 rounded-lg w-full outline-none mt-2"
                />
            </div>
        </>
    )
}

export default InputCustom