import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (data) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    };

    const register = (data) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    };

    const logout = () => {};

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
