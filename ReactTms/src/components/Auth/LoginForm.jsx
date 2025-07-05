
import React, { useState } from 'react';
import { userLogin } from '../../services/authService';
import { useNavigate } from 'react-router-dom'; 

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { email, password }
        try {
            const response = await userLogin(credentials);
            if (response.data.statusCode === 200 && response.data.success) {
                const token = response.data.data.token;

                if (!token) {
                    console.error('Token is missing!');
                    return;
                }
                localStorage.setItem('token', token);

                onLogin();
                navigate('/');
            } else {
                console.warn('Unexpected response:', response.data);
            }
        }
        catch (error) {
            console.error('Login failed:', error.response?.data || error.message);

        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};
export default LoginForm;
