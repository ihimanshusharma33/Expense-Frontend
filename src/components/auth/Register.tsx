import React, { useState } from "react";
import { Link } from "react-router-dom";
interface newErrors{
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}
interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}
const Register = () => {
  const [formData, setFormData] = useState<FormData>(
    {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    }
  );

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({ ...prevFormData, [name]: value }));
  };

  const validate = () => {
      const newErrors: newErrors = {};
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
  
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim()) newErrors.email = "Email is required.";
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
      if (!formData.password) {
        newErrors.password = "Password is required.";
      } else if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters long, contain one uppercase letter, and one special character.";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center">
      <div className="text-dark-text w-full lg:w-1/4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-center text-dark-text mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-dark-text">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-dark-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-dark-text">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 bg-dark-accent text-dark-primary  px-4 py-2 rounded-md hover:bg-dark-text hover:text-dark-primary"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-dark-text mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-dark-accent hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
