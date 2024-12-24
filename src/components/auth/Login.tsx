import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark-primary flex items-center justify-center">
            <div className="text-dark-text  w-full lg:w-1/4 mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                <h2 className="text-2xl font-bold text-center text-dark-text mb-6">Login</h2>
                <form className=" space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-text">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark-text">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/3 bg-dark-accent text-dark-primary px-4 py-2 rounded-md hover:bg-dark-text hover:text-dark-primary"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center text-dark-text mt-4">
                    Don't have an account?{" "}
                    <Link to="/Register" className="text-dark-accent hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;
