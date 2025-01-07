import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ToggleBtn from './ToggleBtn';
import { authContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut, loader, setUser } = useContext(authContext)





    return (
        <div className="fixed inset-x-0 max-w-screen-2xl navbar bg-white/70 text-black lg:px-20 py-4 mx-auto z-50 flex justify-between items-center backdrop-blur-xl">
            <div className="md:navbar-start justify-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu z-50 menu-sm bg-white/90 dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
                        <li><NavLink to={`/`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>Home</NavLink></li>
                        <li><NavLink to={`/Campaigns`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>All Campaign</NavLink></li>
                        <li><NavLink to={`/addNewCampaigns`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>Add New Campaign</NavLink></li>
                        <li><NavLink to={`/myCampaign/${user?.email}`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>My Campaign</NavLink></li>
                        <li><NavLink to={`/myDonation`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>My Donations</NavLink></li>

                        <li><NavLink to={`/aboutUs`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>About Us</NavLink></li>

                        {user && !loader ? "" : <li><NavLink to={`/login`} className="mr-2 hover:scale-105 active:scale-95 duration-150 ease-in">Login</NavLink></li>}
                        {user && !loader ? "" : <li><NavLink to={`/register`} className="mr-2 hover:scale-105 active:scale-95 duration-150 ease-in">Register</NavLink></li>}

                    </ul>
                </div>
                <Link href="/" className="sm:text-2xl  font-bold hover:text-yellow-300 transition-colors duration-300">
                    Crowd Connect
                </Link>
            </div>
            <div className="md:navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NavLink to={`/`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>Home</NavLink></li>
                    <li><NavLink to={`/Campaigns`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>All Campaign</NavLink></li>
                    <li><NavLink to={`/addNewCampaigns`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>Add New Campaign</NavLink></li>
                    <li><NavLink to={`/myCampaign/${user?.email}`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>My Campaign</NavLink></li>
                    <li><NavLink to={`/myDonation`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>My Donations</NavLink></li>

                    <li><NavLink to={`/aboutUs`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>About Us</NavLink></li>
                    <li><NavLink to={`/contactUs`} className={`mr-2 hover:scale-105 active:scale-95 duration-150 ease-in`}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="md:navbar-end flex items-center justify-center ">

                {!loader && <div>
                    {user
                        ?
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn p-1 m-1 rounded-full">
                                <img className='w-10 h-10  rounded-full' src={user.photoURL} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-50 menu rounded-box w-52 p-2 shadow bg-white/90">
                                <li><h1>{user.displayName}</h1></li>
                                <li><button onClick={() => {
                                    logOut()
                                    setUser(null)

                                }}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div><NavLink to={`/login`} className="hidden md:inline px-5 py-2 font-semibold border border-gray-700 rounded-md shadow hover:bg-gray-700 hover:shadow-md transition duration-300 mr-4 hover:text-white">Login</NavLink>
                        </div>}
                </div>}


                <div className='ml-2 mr-6 flex items-center justify-center'><ToggleBtn></ToggleBtn></div>
            </div>
        </div>
    );
};

export default Navbar;