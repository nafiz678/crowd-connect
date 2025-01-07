import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SuccessStories = () => {
  useEffect(() => {
    // Simple fade-in and slide-up animation for stories
    gsap.fromTo(
      '.story-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.stories-container',
          start: 'top 60%',
          end: 'top 30%',
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <section className="text-center max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
          Success Stories
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Hear from the people whose lives have been changed thanks to your support.
        </p>
      </section>

      {/* Stories Section */}
      <div className="stories-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Sarah's Story</p>
          <p>
            Sarah was able to build a new school in her village, thanks to your generous donations. Her dream of providing education to children became a reality.
          </p>
        </div>
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Mark's Journey</p>
          <p>
            Mark overcame homelessness after receiving the support he needed. With your help, he now runs a small business and is giving back to the community.
          </p>
        </div>
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Ella's Triumph</p>
          <p>
            Ella's family was able to afford life-saving medical treatment thanks to your contributions. Today, Ella is healthy and thriving.
          </p>
        </div>
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Carlos' Hope</p>
          <p>
            Carlos was able to restart his life after being displaced by a natural disaster. With your support, he now has a new home and job.
          </p>
        </div>
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Ana's Achievement</p>
          <p>
            Ana was able to attend college with the help of scholarships funded by donors like you. She is now pursuing her dream of becoming a doctor.
          </p>
        </div>
        <div className="story-item p-6 bg-white shadow-lg rounded-lg">
          <p className="font-semibold text-indigo-600">Ana's Achievement</p>
          <p>
            Ana was able to attend college with the help of scholarships funded by donors like you. She is now pursuing her dream of becoming a doctor.
          </p>
        </div>
      </div>

      <section className="text-center mt-16">
        <p className="text-lg text-gray-500">
          Every story is a testament to your generosity and the power of community.
        </p>
      </section>
    </div>
  );
};

export default SuccessStories;
