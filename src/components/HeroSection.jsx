import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/backgroundvideo.mp4';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 text-white h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Get Fit, Get Strong, <br />
              <span className="text-purple-500">Get Healthy!</span>
            </h1>
            <p className="text-black text-lg">
              Welcome to our fitness training program designed to help you achieve your fitness goals and transform your body and mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;