import React, { useState } from "react";
import { userRegistration } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.email) errs.email = "Email is required";
    if (!formData.password) errs.password = "Password is required";
    if (!formData.fullName) errs.fullName = "Full Name is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await userRegistration(formData);
      if (response.data.success) {
        setSubmitted(true);
        setErrors({});
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setErrors({ api: response.data.message || "Registration failed" });
      }
    } catch (error) {
      setErrors({ api: error.response?.data?.message || error.message });
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {errors.api && (
            <p className="text-red-600 font-medium text-sm mb-4">
              {errors.api}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Register
          </button>

          <p className="mt-4 text-center text-sm">
            Already have account?{" "}
            <Link to="/Login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            Registration successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
