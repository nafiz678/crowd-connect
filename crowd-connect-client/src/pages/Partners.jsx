import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';


const Partners = () => {

    const partners = [
        { id: 1, logo: "https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" },
        { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" },
        { id: 3, logo: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" },
        { id: 4, logo: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/reddit_logo_red_on_white.jpg" },
    ];



    return (
        <div className="my-10 pb-20 bg-base-300 flex flex-col items-center p-6">

            <Fade cascade>
                <h1 className="font-extrabold text-center text-3xl md:text-4xl text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-600 via-pink-500 to-yellow-400 
            animate-text-glow tracking-wide uppercase 
            transition-transform transform mb-4">
                    <Typewriter
                        words={['Our Partners', 'Trusted Collaborators', 'Global Network']}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}>
                        </Typewriter>
            </h1>
            </Fade>


            <p className="text-gray-600 text-lg mb-10 text-center">
                We collaborate with amazing partners to bring meaningful projects to life. Here are some of the organizations we work with
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                {partners.map((partner) => (
                    <Fade>
                        <div
                            key={partner.id}
                            className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center"
                        >
                            <img
                                src={partner.logo}
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default Partners;