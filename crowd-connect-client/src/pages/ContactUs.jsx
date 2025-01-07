import React, { useState } from 'react';
import LottieFiles from '../components/LottieAnimation';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission (could be replaced with API call)
        setIsSubmitted(true);
    };

    return (
        <div className="bg-gray-50 transition-all duration-300 ease-in-out py-16 px-4 sm:px-6 lg:px-8">
            <section className="max-w-7xl mx-auto transition-all duration-300 ease-in-out grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Section (Animation/Image) */}
                <div className="flex transition-all duration-300 ease-in-out justify-center items-center">
                    {/* Replace this div with your animated image or JSON animation */}
                    <LottieFiles></LottieFiles>
                </div>

                {/* Right Section (Contact Form) */}
                <div className="bg-white transition-all duration-300 ease-in-out p-8 rounded-lg shadow-lg">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="transition-all duration-300 ease-in-out">
                            <h2 className="text-4xl font-bold text-black mb-6 text-center animate__animated animate__fadeIn">
                                Contact Us
                            </h2>
                            <div className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-3 outline bg-white border border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 transform hover:scale-105"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-3 bg-white outline border border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 transform hover:scale-105"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-6 py-3 bg-white outline border border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 transform hover:scale-105"
                                        placeholder="Your Message"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-blue-700 focus:outline-none transition transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className="text-center transition-all duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank you for reaching out!</h3>
                            <p className="text-lg text-gray-700">We have received your message and will get back to you as soon as possible.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
