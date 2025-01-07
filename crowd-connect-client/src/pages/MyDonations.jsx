import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';
import Loader from '../components/Loader';


const MyDonations = () => {

    const { user } = useContext(authContext)
    const [donations, setDonation] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://crowd-connect-server.vercel.app/donation/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // Ensure the response is an array
                setDonation(Array.isArray(data) ? data : []);
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching campaigns:", error);
                setLoading(false)
                // setDonation([]); // Fallback to an empty array in case of error
            });
    }, []);


    return (
        <div>
            <h2 className='font-extrabold text-center text-3xl md:text-4xl text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-600 to-purple-700 
            animate-text-glow tracking-wide uppercase 
            transition-transform transform my-6' >
                <Typewriter
                        words={['My Donations']}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}>
                        </Typewriter>
            </h2>

            <div className='w-11/12 mx-auto'>
            {loading ? (
                <Loader></Loader>
            ) : donations.length > 0 ? (

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {
                            donations.map((donation) => (
                                <div key={donation._id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            className='h-60 w-auto'
                                            src={donation.image}
                                            alt="image" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{donation.title}</h2>
                                        <h2 className="text-gray-600"><strong>Author: {donation.userName}</strong></h2>
                                        <p className='text-gray-500 font-medium capitalize'>Type: {donation.type}</p>
                                        <p className='text-gray-500'>{donation.description.slice(0, 120)}...</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                ) : (
                    <div className="text-center text-5xl text-gray-500 my-10">
                        No donations from "{user.email}".
                    </div>
                )
                }

            </div>
        </div>
    );
};

export default MyDonations;