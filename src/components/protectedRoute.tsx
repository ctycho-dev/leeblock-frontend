import { FC, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from '../authProvider';
import { postTokenerification } from "../utils/oauth2";

const ProtectedRoute: FC = () => {
    const { isAuthenticated, isLoading, login, setUser } = useAuth();
    const [isVerifying, setIsVerifying] = useState<boolean>(true);
    // const location = useLocation();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("access_token");
            if (token) {
                try {
                    const res = await postTokenerification(token);
                    setUser(res?.data)
                    if (res && 'status' in res && res.status === 200) {
                        login(token);
                    }
                } catch (e) {
                    console.log(`Error verifying token: ${e}`);
                }
            }
            setIsVerifying(false);
        };

        verifyToken();
    }, []);


    if (isVerifying || isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoute

