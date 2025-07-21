import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/Auth/LoginForm';
import RegistrationForm from './components/Auth/RegistrationForm';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <LoginForm /> : <Navigate to="/" replace />}
      />
      <Route path="/register" element={<RegistrationForm />} />

      <Route
       path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
