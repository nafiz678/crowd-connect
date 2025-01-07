import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-toastify';

const NewsLatter = () => {

    const handleSubscribe = () => {
        toast.success("Thank You for Subscribe")
    }


    return (
        <Fade>
            <div className='bg-[#1F0733] flex flex-col justify-center items-center lg:px-20 px-6 py-10 lg:py-44'>
                <h1 className='text-white lg:text-6xl md:text-3xl text-2xl  text-center mb-10'>Get the newest campaigns in your inbox</h1>
                <h5 className='text-white lg:text-2xl text-lg text-center mb-9'>Exclusive weekly updates with new campaign, drops, and special offers.</h5>

                <div className='mb-4 flex justify-center items-center flex-col md:flex-row gap-4'>
                    <input className='input md:w-96' type="email" placeholder='Your email address' name="" id="" />
                    <button onClick={handleSubscribe} className='hover:bg-[#CF0E67] bg-[#f30573] px-7 py-3 rounded-lg  text-white '>Subscribe</button>
                </div>
                <p className='text-white'>By clicking “Sign me up” I have read and agree to CrowdConnect <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span> .</p>
            </div>
        </Fade>
    );
};

export default NewsLatter;