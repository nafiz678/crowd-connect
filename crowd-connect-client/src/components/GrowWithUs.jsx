import React from 'react';
import levelUpImg from "../assets/imageLevel up.svg.png"
import { Typewriter } from 'react-simple-typewriter';
import Reveal, { Fade } from 'react-awesome-reveal';

const GrowWithUs = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='font-extrabold text-center text-3xl md:text-4xl text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-600 via-yellow-500 to-pink-600 
            animate-text-glow tracking-wide uppercase 
            transition-transform transform mb-4' >

                    <Typewriter
                        words={['Grow With Us', 'Level Up Fast']}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}>
                    </Typewriter>

                </h2>
                <p className='lg:text-2xl md:w-3/4 mx-auto'>We’re a remote first organization with teammates across the nation. We're a team of inventors, musicians, triathletes, activists, filmmakers and writers, united by our love for the creativity and ingenuity we help enable across our site.</p>
            </div>

            <Fade direction="up" >
                <div className='flex md:w-10/12 mx-auto flex-col lg:flex-row bg-[#FFD7E9] mt-16 md:pt-28 md:px-24 p-4 rounded-lg'>
                    <div className='text-[#2A2A2A]'>
                        <h1 className='md:text-4xl lg:text-6xl text-3xl font-semibold mb-8'>Fearless, Authentic, Collaborative & Empowering</h1>
                        <p className='text-xl'>When you practice these values everyday, amazing things happen. From big reveals to unexpected smiles and grand surprises, the possibilities are endless at Crowd Connect.</p>
                    </div>
                    <img className='w-96 h-auto' src="https://g1.iggcdn.com/assets/site/careers/face_values-8c5bda139bc99cdbe2847d121c04de8c02bd17c9bd88eb7c2e4a9348124ddc93.svg" alt="" />
                </div>
            </Fade>

            <Fade direction="up" >
                <div className='flex justify-between flex-col lg:flex-row gap-6 items-center w-9/12 mx-auto mt-8 mb-20'>
                    <img src="https://g2.iggcdn.com/assets/site/careers/pear_programming-0d299e6600f6d75daf33fbc40ed0250cbd4db69ca11ebf22920e69270b3597fe.svg" alt="" />
                    <h2 className='lg:w-1/2 mx-auto text-2xl lg:text-2xl'>
                        "Great people, great mission, fantastic perks. Crowd Connect is an amazing place to work."
                    </h2>
                </div>
            </Fade>

            <Fade direction="up">
                <div className='flex lg:flex-row-reverse justify-between flex-col  gap-6 items-center w-9/12 mx-auto mt-8 mb-20'>
                    <img src={levelUpImg} alt="" />
                    <h2 className='lg:w-1/2 mx-auto text-2xl lg:text-2xl'>
                        "I’ve learned more in my 2 years at Crowd Connect than I have at any other company I’ve worked for."
                    </h2>
                </div>
            </Fade>

        </div>
    );
};

export default GrowWithUs;