import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const AllCampaigns = () => {
    const { user, loader } = useContext(authContext);
    const [campaigns, setCampaign] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://crowd-connect-server.vercel.app/campaign/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // Ensure the response is an array
                setCampaign(Array.isArray(data) ? data : []);
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching campaigns:", error);
                setCampaign([]); // Fallback to an empty array in case of error
                setLoading(false)
            });
    }, []);


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                fetch(`https://crowd-connect-server.vercel.app/campaigns/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = campaigns.filter(camp => camp._id !== id)
                        setCampaign(remaining)
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        });

    }






    return (
        <div className="overflow-x-auto my-10">
            {loading ? ( 
                <Loader></Loader>
            ) : campaigns.length > 0 ? (
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Campaign Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={`${campaign.email}`}
                                key={campaign._id}
                            >
                                <th></th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={campaign.image}
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{campaign.userName}</div>
                                            <div className="text-sm opacity-50">{campaign.type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {campaign.title}
                                    <br />
                                    <span className="badge whitespace-nowrap badge-ghost badge-sm">
                                        Minimum : {campaign.minimumDonation}$
                                    </span>
                                </td>
                                <td>{campaign.deadline}</td>
                                <th>
                                    <Link to={`/updateCampaign/${campaign._id}`} className="btn btn-ghost text-xl">
                                        <FaEdit />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        className="btn btn-ghost text-xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <Tooltip id="my-tooltip"></Tooltip>
                </table>
            ) : (
                <div className="text-center text-gray-500">
                    No campaigns from "{user.email}".
                </div>
            )}
        </div>
    );
};

export default AllCampaigns;
