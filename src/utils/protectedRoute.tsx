import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: FC = ({}) => {

    const user = true
    return user ? <Outlet /> : <Navigate to={'/login'}/>
}

export default ProtectedRoute