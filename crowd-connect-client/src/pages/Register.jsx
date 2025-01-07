import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, updateUser, googleLogin, setUser } = useContext(authContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        const info = { displayName: name, photoURL: photo }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if(passwordRegex.test(password))
        {
            createUser(email, password)
            .then(res => {
                const user = res.user
                updateUser(info)
                const newUser = { ...user, ...info }
                setUser(newUser)
                navigate("/");
                toast.success("Registration Successful")

            })
            .catch(error => {
                
            })
        }
        else{
            toast.error("Password Invalid")
        }
    }

    const handleGoogle= () =>{
        googleLogin()
        .then(res=>{
            navigate("/")
            toast.success("Registration Successful")
        })
        .then(error=>{
        })
    }



    return (
        <div className="my-20 flex items-center justify-center ">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
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


                    {/* Photo URL Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="photoUrl"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photo"

                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter photo URL"
                        />
                    </div>

                    {/* Password Field */}
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Register
                    </button>
                </form>

                {/* Divider */}
                <div className="mt-6 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Button */}
                <div className="mt-6 space-y-4">
                    <button
                        onClick={handleGoogle}
                        type="button"
                        className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition duration-300"
                    >
                        <FaGoogle className='mr-2'></FaGoogle> Login with Google
                    </button>
                </div>


                <div className="text-center text-sm text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 hover:underline focus:underline"
                    >
                        Sign In
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;