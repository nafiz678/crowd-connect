import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="footer bg-base-200 py-12">
            <div className=" px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <Link to={"/"}>
                        <h2 className='text-3xl font-semibold mb-4'>Crowd Connect</h2></Link>
                        <p className="text-gray-400">
                            Crowd Connect is a top crowdfunding platform empowering individuals, startups, and businesses to raise funds for innovative ideas and personal causes.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 mt-8">Find Us</h2>
                            <div className="flex justify-start space-x-6 mt-4">

                                <Link to={"https://x.com/NafizulIkram"} target='_blank' className="text-gray-400 ">
                                    <FaFacebookSquare></FaFacebookSquare>
                                </Link>
                                <Link to={"https://x.com/NafizulIkram"} target='_blank' className="text-gray-400 ">
                                    <FaTwitterSquare></FaTwitterSquare>
                                </Link>
                                <Link to={"https://www.linkedin.com/in/md-nafizul-iqram-858a3828b/"} target='_blank' className="text-gray-400 ">
                                    <FaLinkedin></FaLinkedin>
                                </Link>
                                <Link to={"#"} className="text-gray-400 ">
                                    <FaInstagramSquare></FaInstagramSquare>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-400 space-y-3">
                            <li><Link to={"/"} className="transition-colors duration-300">Home</Link></li>
                            <li><Link to={"/campaigns"} className="transition-colors duration-300">Campaigns</Link></li>
                            <li><Link to={"/aboutUs"} className="transition-colors duration-300">About</Link></li>
                            <li><Link to={"/contactUs"} className="transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* <!-- Contact Section --> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-gray-400 space-y-3">
                            <li><a href="mailto:nafizulikram3@gmail.com" className="hover:text-yellow-300 transition-colors duration-300">nafizulikram3@gmail.com</a></li>
                            <li><a href="tel: +8801632820920" className="hover:text-yellow-300 transition-colors duration-300">+8801632820920</a></li>
                            <li>CrowdConnect , Rampura, Dhaka</li>
                        </ul>
                    </div>



                </div>

                <div className="border-t border-gray-700 mt-12 pt-6 w-full">
                    <h2 className="text-gray-500 text-center text-sm">
                        &copy; 2024 Crowd Connect. All rights reserved.
                    </h2>

                </div>
            </div>
        </footer>

    );
};

export default Footer;