import axios from 'axios';
import React, { useEffect, useState } from 'react';



const useCampaign = (AscSort, DscSort) => {
    const [campaign, setCampaign] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://crowd-connect-server.vercel.app/sortedCampaign?ascSort=${AscSort}&dscSort=${DscSort}`)
        .then(res=> {
            setCampaign(res.data)
            setLoading(false)
        })
     }, [AscSort, DscSort])


    return {campaign, loading};
};

export default useCampaign;