// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, userLogin, userLogout } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                debugger;
                const response = await getUserDetails();
                console.log("User Detail:", response.data.data);
                if (response.data.success) {
                    console.log("user details" + response.data.data)
                    setUser(response.data.data);
                } else {
                    logout();
                }
            } catch (error) {
                console.error("Failed to fetch user details:", error);
                logout();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        try {
            debugger;
            const loginResponse = await userLogin(credentials);
            if (loginResponse.data.success) {
                const userResponse = await getUserDetails();
                if (userResponse.data.success) {
                    setUser(userResponse.data.data);
                    navigate('/');
                } else {
                    console.error("Failed to fetch user details after login.");
                }
            } else {
                console.error("Login API failed:", loginResponse.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }

};

const logout = async () => {
    try {
        debugger
        const response = await userLogout();
        if (response.data.success) {
            setUser(null);
            navigate('/login');
        }
    } catch (error) {
        console.error("Logout failed:", error);
    }
};

return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
    </AuthContext.Provider>
);
};
