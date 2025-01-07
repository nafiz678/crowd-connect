import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';




const CampaignCard = () => {
    const [campaigns, setCampaign] = useState([])
    const date = new Date()
    

    useEffect(() => {
        fetch("https://crowd-connect-server.vercel.app/campaigns")
            .then(res => res.json())
            .then(data => {
                
                setCampaign(data)
            })
    }, [])





    return (
        <div className='w-11/12 mx-auto my-20'
        >
            <Fade>
                <h2 className='font-extrabold text-center text-3xl md:text-4xl text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-600 via-pink-500 to-yellow-400 
            animate-text-glow tracking-wide uppercase 
            transition-transform transform mb-10' >

                    <Typewriter
                        words={['Running Campaigns', 'Running Campaigns', 'Running Campaigns']}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}>
                    </Typewriter>


                </h2>
            </Fade>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {campaigns.filter((campaign) => {
                    const deadline = new Date(campaign.deadline);
                    return deadline > date;

                }).slice(0, 6).map((campaign) => (
                    <div
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`Deadline: ${campaign.deadline}`}
                        key={campaign._id}
                        className="card bg-base-200 shadow-xl">
                        <figure>
                            <img
                                className='h-64 w-auto'
                                src={campaign.image}
                                alt="Campaign" />
                        </figure>
                        <div className="card-body space-y-0 flex-none">
                            <h2 className="card-title max-h-9">{campaign.title}</h2>
                            <p>{campaign.description.slice(0, 40)}...</p>
                            <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/campaigns/${campaign._id}`} className="btn btn-primary">See more</Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <Tooltip id="my-tooltip">

            </Tooltip>
        </div>
    );
};

export default CampaignCard;