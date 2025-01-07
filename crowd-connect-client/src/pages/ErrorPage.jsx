import React from 'react';
import notFoundImg from "../assets/not-found.png"
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col justify-center items-center p-6">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <img
                    src={notFoundImg}
                    alt="Not found image"
                    className="w-64 h-64 mx-auto mb-6"
                />
                <button
                    onClick={() => navigate("/") }
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;