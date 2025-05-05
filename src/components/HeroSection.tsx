
import React from 'react';
import Logo from './Logo';

const HeroSection = () => {
  return (
    <div className="bg-toi-light-blue min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        {/* Header with Logo */}
        <header className="mb-6">
          <Logo />
        </header>
        
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            {/* Workshop Banner */}
            <div className="inline-block bg-toi-purple text-white px-4 py-2 rounded-full text-sm md:text-base font-medium mb-5">
              10 Day Live Online Workshop
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              AI Summer Camp for Students
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-toi-purple font-medium mb-8">
              Make Your Child Future-Ready with AI
            </h2>
            
            {/* Info Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 border-t border-b border-gray-200 py-4">
              {/* Eligibility */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-gray-100 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toi-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-1">Eligibility</h3>
                <p className="text-sm text-gray-600">Grade 6–12</p>
              </div>
              
              {/* Get Certified */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-gray-100 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toi-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-1">Get Certified</h3>
                <p className="text-sm text-gray-600">The Times of India</p>
              </div>
              
              {/* Pick a Slot */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-gray-100 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toi-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-1">Pick a Slot</h3>
                <p className="text-sm text-gray-600">11AM–1PM</p>
                <p className="text-sm text-gray-600">5PM–7PM</p>
              </div>
              
              {/* Duration */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-gray-100 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-toi-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-1">Duration</h3>
                <p className="text-sm text-gray-600">2 Weeks</p>
                <p className="text-sm text-gray-600">Jun 2 Onwards</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mb-6">
              <button className="bg-toi-purple hover:bg-toi-dark-purple text-white py-4 px-6 rounded-md text-xl font-medium transition-colors duration-300 w-full md:w-auto md:px-12">
                Enroll Now @ <span className="line-through">₹15,000</span> ₹10,000
              </button>
            </div>
            
            {/* Limited Offer */}
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base font-medium">33% Early-Bird Offer for Limited Seats</p>
            </div>
          </div>
          
          {/* Right Side - Hero Image / Video */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            {/* Video Container */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto" 
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source 
                  src="https://img.etb2bimg.com/files/retail_files/file_1746014146_compiled_ai_students_hero.webm" 
                  type="video/webm" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Featured Banner */}
            <div className="absolute -bottom-3 right-0 transform rotate-2 bg-toi-yellow text-blue-900 px-5 py-3 rounded-lg font-medium text-sm md:text-base shadow-lg z-10">
              Get your Child Featured on The Times of India Website
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
