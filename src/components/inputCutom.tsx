import { FC } from "react";

interface IInputCustom {
    type: string
    label: string
    value: string
    placeholder: string
    onChangeFunc: any
    notRequired?: boolean
}

const InputCustom: FC<IInputCustom> = ({ type, label, value, placeholder, onChangeFunc, notRequired }) => {

    const handleChange = (event: any) => {
        onChangeFunc(event.target.value);
    };

    return (
        <>
            <div>
                <label className={notRequired ? '' : 'required'}>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="border p-2 rounded-lg w-full outline-none mt-2"
                />
            </div>
        </>
    )
}

export default InputCustom