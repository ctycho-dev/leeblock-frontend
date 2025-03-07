import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { IUser } from "./types";

interface AuthContextProps {
    user: IUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string) => void;
    logout: () => void;
    setUser: Dispatch<SetStateAction<IUser | null>>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = (token: string) => {
        localStorage.setItem("access_token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};