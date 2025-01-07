import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import employ2 from "../assets/employ-2.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    // Animate sections when they enter the viewport
    gsap.fromTo(
      ".hero-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".hero-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
    
    gsap.fromTo(
      ".mission-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".mission-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
    
    gsap.fromTo(
      ".vision-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".vision-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
    
    gsap.fromTo(
      ".help-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".help-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
    
    gsap.fromTo(
      ".team-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".team-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
    
    gsap.fromTo(
      ".cta-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".cta-section", start: "top 80%", end: "top 30%", scrub: true }}
    );
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-7xl mx-auto mb-16 hero-section">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
          About Our Crowd Connect Platform
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Our platform is dedicated to raising funds for those in need, empowering communities, and changing lives one donation at a time.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="text-center mb-16 mission-section">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Our mission is simple: To make the world a better place by providing a platform that connects individuals willing to help with those who are in need. Through the collective power of people, we can bring hope, support, and change to countless lives around the globe.
        </p>
      </section>

      <section className="text-center mb-16 vision-section">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          We envision a world where compassion, kindness, and generosity drive meaningful change. We strive to be the bridge between those who want to help and those who need it the most, ensuring that every donation goes a long way.
        </p>
      </section>

      {/* How We Help Section */}
      <section className="py-12 px-6 sm:px-12 mb-16 help-section">
        <h2 className="text-3xl font-bold text-center mb-8">How We Help</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Empowering Communities</h3>
            <p className="text-gray-700">
              We empower communities by providing essential resources for growth, education, healthcare, and more.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transparency & Trust</h3>
            <p className="text-gray-700">
              Our platform ensures full transparency with every donation, so you can see exactly how your support is being used.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Impact</h3>
            <p className="text-gray-700">
              We are committed to creating a global impact, helping individuals and communities in need around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="text-center mb-16 team-section">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src="https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-700">Founder & CEO</p>
            <p className="text-gray-500">John is passionate about bringing people together to make the world a better place.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={employ2} alt="Team member" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-700">Co-Founder & CTO</p>
            <p className="text-gray-500">Jane works tirelessly to ensure our platform runs smoothly and securely.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src="https://img.freepik.com/free-photo/portrait-serious-smiling-modern-indian-man-near-office-building_496169-2890.jpg" alt="Team member" className="w-32 object-cover h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Emily Davis</h3>
            <p className="text-gray-700">Community Manager</p>
            <p className="text-gray-500">Emily connects with communities, ensuring their needs are met and their voices are heard.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-center text-white py-16 px-4 sm:px-6 lg:px-8 cta-section">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg mb-8">
          Your support can change lives. Whether you donate, volunteer, or spread the word, you are helping create a brighter future for those in need.
        </p>
        <Link to="/Campaigns" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
          Donate Now
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
