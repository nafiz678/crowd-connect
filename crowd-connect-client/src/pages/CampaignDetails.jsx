import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const CampaignDetails = () => {
    const { user } = useContext(authContext)

    const displayName = user.displayName
    const userEmail = user.email

    const campaign = useLoaderData()

    const { title, image, type, description, minimumDonation, deadline, email, userName } = campaign
    const newCampaign = { title, image, type, description, minimumDonation, deadline, email, userName }

    const newData = { ...newCampaign, displayName, userEmail }

    const handleDonateBtn = (id) => {
        const date = new Date()
        const disableDate = new Date(campaign.deadline)
        if(disableDate < date){
            return toast.error("Deadline is over")
        }

        fetch(`https://crowd-connect-server.vercel.app/donations`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Donation successful")
                
            })
    }



    return (
        <div className={`min-h-screen flex items-center justify-center p-6 relative bg-cover bg-center  w-full`}
            style={{ backgroundImage: `url(${campaign.image})` }}>
            <div className="absolute inset-0 backdrop-blur-md backdrop-brightness-50"></div>
            <div className=" z-10 bg-transparent backdrop-blur-3xl rounded-xl max-w-4xl w-full p-8 shadow-lg">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-[200px] sm:h-[350px] lg:h-[550px] w-full object-cover rounded-lg"
                />
                <div className="p-6">
                    <h1 className="md:text-2xl text-gray-300 text-xl font-bold mb-4">{campaign.title}</h1>
                    <p className="mb-2 text-gray-300">
                        <strong>Type:</strong> {campaign.type}
                    </p>
                    <p className="mb-2 text-gray-300">
                        <strong>Minimum Donation:</strong> {campaign.minimumDonation}$
                    </p>
                    <p className="mb-2 text-gray-300">
                        <strong>Organizer:</strong> {campaign.userName}
                    </p>
                    <p className="mb-2 text-gray-300">
                        <strong>Deadline:</strong> {campaign.deadline}
                    </p>
                    <p className="text-gray-400 mb-2">
                        <strong>Email:</strong> {campaign.email}
                    </p>
                    <p className="text-gray-400 mb-6">
                        <strong>Description:</strong> {campaign.description}
                    </p>
                    <button onClick={() => handleDonateBtn(campaign._id)} className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl">
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;