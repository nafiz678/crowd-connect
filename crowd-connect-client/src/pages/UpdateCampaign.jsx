import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCampaign = () => {
    const { user } = useContext(authContext)
    const campaign = useLoaderData()

    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;
        const title = form.title.value || campaign.title
        const image = form.image.value || campaign.image
        const type = form.type.value || campaign.type
        const description = form.description.value || campaign.description
        const minimumDonation = form.donation.value || campaign.minimumDonation
        const deadline = form.deadline.value || campaign.deadline
        const email = form.email.value || campaign.email
        const userName = form.userName.value || campaign.userName

        const updatedCampaign = { title, image, type, description, minimumDonation, deadline, email, userName }
        

        fetch(`https://crowd-connect-server.vercel.app/campaigns/${campaign._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    
                    form.reset()
                    toast.success("Updated Successfully")
                }
            })
    }




    return (
        <div className="py-10  flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Update Campaign</h2>
                <form onSubmit={handleUpdate}>
                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                        </label>
                        <input
                        defaultValue={campaign.image}
                            type="url"
                            name="image"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter an image URL"
                            
                        />
                    </div>

                    {/* Campaign Title */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Campaign Title
                        </label>
                        <input
                            type="text"
                            defaultValue={campaign.title}
                            name="title"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the campaign title"
                            
                        />
                    </div>

                    {/* Campaign Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" >
                            Campaign Type
                        </label>
                        <select
                        defaultValue={campaign.type}
                            name="type"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            
                        >
                            <option value="personal issue">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative ideas">Creative Ideas</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                        defaultValue={campaign.description}
                            name="description"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Describe your campaign"
                            
                        ></textarea>
                    </div>

                    {/* Minimum Donation Amount */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Donation Amount
                        </label>
                        <input
                        defaultValue={campaign.minimumDonation}
                            type="number"
                            name="donation"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            placeholder="Minimum donation amount"
                            
                        />
                    </div>

                    {/* Deadline */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Deadline
                        </label>
                        <input
                            defaultValue={campaign.deadline}
                            type="date"
                            name="deadline"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>

                    {/* User Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            User Email
                        </label>
                        <input
                            type="email"
                            value={user.email}
                            readOnly
                            name='email'
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 "
                        />
                    </div>

                    {/* User Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            User Name
                        </label>
                        <input
                            type="text"
                            value={user.displayName}
                            readOnly
                            name='userName'
                            className="w-full px-4 py-2 border rounded-md bg-gray-100"
                        />
                    </div>

                    {/* Add Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Update Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;