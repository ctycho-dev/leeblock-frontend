import { FC } from "react";

interface IError { }

const Error: FC<IError> = ({ }) => {

    return (
        <>
            <h1 className="text-red">Error</h1>
        </>
    )
}

export default Error