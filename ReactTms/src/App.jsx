import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/Auth/LoginForm';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={!token ? <LoginForm onLogin={() => setToken(localStorage.getItem('token'))} /> : <Navigate to="/" replace />}
      />

      <Route
        path="/"
        element={token ? <Home /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default App;
