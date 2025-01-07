import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {loginUser, googleLogin, setUser} = useContext(authContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
        .then(res=>{
            const user = res.user
            setUser(user)
            navigate("/");
            toast.success("Login Successful")
              form.reset()
        })
        .catch(error=>{
            toast.error("Invalid Email/Password")
        })
    }

    const handleGoogle= () =>{
        googleLogin()
        .then(res=>{
            navigate("/")
            toast.success("Login Successful")
        })
        .then(error=>{
        })
    }


    return (
        <div className="my-20 flex items-center justify-center ">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/*  Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline focus:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="mt-6 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="mt-6 space-y-4">
                    <button
                        onClick={handleGoogle}
                        type="button"
                        className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition duration-300"
                    >
                        <FaGoogle className='mr-2'></FaGoogle> Login with Google
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 hover:underline focus:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;