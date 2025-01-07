import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const AddNewCampaigns = () => {
    const {user} = useContext(authContext)

    const handleSubmit = (e)=>{
        e.preventDefault()

        const form = e.target;
        const title = form.title.value
        const image = form.image.value
        const type = form.type.value
        const description = form.description.value
        const minimumDonation = form.donation.value
        const deadline = form.deadline.value
        const email = form.email.value
        const userName = form.userName.value

        const campaign = {title, image, type, description, minimumDonation, deadline, email, userName}
        

        fetch(`https://crowd-connect-server.vercel.app/campaigns`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(campaign)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                toast.success("Campaign added successfully")
                
                form.reset()
            }
        })

    }


    return (
        <div className="py-10  flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add a New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter an image URL"
                            required
                        />
                    </div>

                    {/* Campaign Title */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Campaign Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the campaign title"
                            required
                        />
                    </div>

                    {/* Campaign Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" >
                            Campaign Type
                        </label>
                        <select
                            name="type"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            required
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
                            name="description"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Describe your campaign"
                            required
                        ></textarea>
                    </div>

                    {/* Minimum Donation Amount */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           Donation Amount
                        </label>
                        <input
                            type="number"
                            name="donation"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            placeholder="Minimum donation amount"
                            required
                        />
                    </div>

                    {/* Deadline */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Deadline
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            className="w-full px-4 py-2 border rounded-md  focus:ring-2 focus:ring-blue-500"
                            required
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
                        Add Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaigns;