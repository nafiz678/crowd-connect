import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import Loader from '../components/Loader';




const AllCampaigns = () => {
    const [campaigns, setCampaign] = useState([])
    const [AscSort, setAscSort] = useState(false)
    const [DscSort, setDscSort] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoader] = useState(true)


    useEffect(() => {
        fetch(`https://crowd-connect-server.vercel.app/campaigns?ascSort=${AscSort}&dscSort=${DscSort}`)
            .then(res => res.json())
            .then(data => {
                setCampaign(data)
                setLoader(false)
            })
    }, [AscSort, DscSort])



    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleAscSort = () => {
        setAscSort(!AscSort)
        setDscSort(false)
        setIsOpen(false)
    }
    const handleDscSort = () => {
        setDscSort(!DscSort)
        setAscSort(false)
        setIsOpen(false)
    }

    console.log(campaigns)



    return (
        <div className=" w-11/12 mx-auto mb-10">
            <div className='flex justify-between items-center w-11/12 mx-auto my-6'>
                <h2 className='text-2xl md:text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-medium'>
                    <Typewriter
                        words={['All Campaigns']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}>
                    </Typewriter>
                </h2>

                <Fade className='z-50' direction='up'>
                    {/* Sorting methods */}
                    <div className="relative inline-block text-left mr-4 mb-12">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        >
                            Sort By
                            <svg
                                className={`w-5 h-5 ml-2 -mr-1 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`absolute right-0 left-0 z-50 w-52 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ease-in-out ${isOpen
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            <div className="py-1 z-50">
                                <button
                                    onClick={() => handleAscSort()}
                                    className={`block px-4 py-2 text-sm z-50 text-gray-700
                                transition-all duration-300 ease-linear 
                                 hover:bg-orange-200 hover:text-gray-800 w-full text-left
                                ${AscSort ? "bg-blue-100 text-blue-800" : ""}   `}
                                >
                                    {AscSort == true ? "Sorted by Ascending Order" : "Sort By Ascending Order"}

                                </button>
                                <button
                                    onClick={() => handleDscSort()}
                                    className={`block px-4 py-2 z-50 text-sm text-gray-700 
                                  transition-all duration-300 ease-linear  hover:bg-orange-200 hover:text-gray-800 w-full text-left
                                    ${DscSort ? "bg-blue-100 text-blue-800" : ""}   `}
                                >
                                    {DscSort == true ? "Sorted by Descending Order" : "Sort By Descending Order"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            {loading ?
                <Loader></Loader>
                :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {campaigns.map((campaign) => (
                        <div
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`Deadline: ${campaign.deadline}`}
                            key={campaign._id}
                            className="card bg-base-200 z-0">
                            <figure>
                                <img
                                    className='h-64 w-auto'
                                    src={campaign.image}
                                    alt="Campaign" />
                            </figure>
                            <div className="card-body z-0 space-y-0 flex-none">
                                <h2 className="card-title max-h-9">{campaign.title}</h2>
                                <p>{campaign.description.slice(0, 40)}...</p>
                                <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                                <p>Minimum Donation: {campaign.minimumDonation}$</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/campaigns/${campaign._id}`} className="btn btn-primary">See more</Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default AllCampaigns;