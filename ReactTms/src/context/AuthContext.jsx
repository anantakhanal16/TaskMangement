// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../services/authService';

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        debugger;
        const fetchUser = async () => {
            try {
                const response = await getUserDetails();
                console.log("User Detail:", response.data.data);
                if (response.data.success) {
                    setUser(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch user details:", error);
                logout();
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, [token]);


    const login = (token) => {
        debugger;
        localStorage.setItem('token', token);
        setToken(token);
        const userData = getUserDetails();
        setUser(userData);
    };


    const logout = () => {
        debugger;
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setTimeout(() => {
            navigate('/login');
        }, 100); // Let the context state settle first
    };




    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
