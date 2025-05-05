
import React from 'react';
import Logo from './Logo';
import { Award, Clock, CalendarDays, Percent } from 'lucide-react';
import { Badge } from './ui/badge';

const HeroSection = () => {
  return (
    <div className="bg-modern-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Logo */}
        <header className="mb-12">
          <Logo />
        </header>
        
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            {/* Workshop Badge */}
            <Badge className="bg-modern-primary text-white px-6 py-2 rounded-full text-xl font-medium mb-5 border-none hover:bg-modern-primary/90" variant="default">
              10 Day Live Online Workshop
            </Badge>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-modern-dark mb-2">
              AI Summer Camp for Students
            </h1>
            
            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-modern-primary font-medium mb-12">
              Make Your Child Future-Ready with AI
            </h2>
            
            {/* Info Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8 border-y border-gray-200 py-4 divide-x divide-gray-200">
              {/* Eligibility */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-modern-primary/10 p-3 rounded-full mb-2">
                  <Award className="h-6 w-6 text-modern-primary" />
                </div>
                <h3 className="text-sm font-semibold text-modern-dark mb-1">Eligibility</h3>
                <p className="text-sm text-modern-gray">Grade 6–12</p>
              </div>
              
              {/* Get Certified */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-modern-primary/10 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-modern-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-modern-dark mb-1">Get Certified</h3>
                <p className="text-sm text-modern-gray">LevelUp</p>
              </div>
              
              {/* Pick a Slot */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-modern-primary/10 p-3 rounded-full mb-2">
                  <Clock className="h-6 w-6 text-modern-primary" />
                </div>
                <h3 className="text-sm font-semibold text-modern-dark mb-1">Pick a Slot</h3>
                <p className="text-sm text-modern-gray">11AM–1PM</p>
                <p className="text-sm text-modern-gray">5PM–7PM</p>
              </div>
              
              {/* Duration */}
              <div className="flex flex-col items-center text-center p-3">
                <div className="bg-modern-primary/10 p-3 rounded-full mb-2">
                  <CalendarDays className="h-6 w-6 text-modern-primary" />
                </div>
                <h3 className="text-sm font-semibold text-modern-dark mb-1">Duration</h3>
                <p className="text-sm text-modern-gray">2 Weeks</p>
                <p className="text-sm text-modern-gray">Enroll Now @ <span className="line-through">₹10,000</span> ₹499</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mb-6">
              <button className="btn-secondary w-full md:w-auto text-xl font-medium py-4 px-6">
                Enroll Now @ <span className="line-through">₹10,000</span> ₹499
              </button>
            </div>
            
            {/* Limited Offer */}
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Percent className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-base font-medium">33% Early-Bird Offer for Limited Seats</p>
            </div>
          </div>
          
          {/* Right Side - Hero Image / Video */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            {/* Video Container */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <video className="w-full h-auto" autoPlay muted loop playsInline>
                <source src="https://img.etb2bimg.com/files/retail_files/file_1746014146_compiled_ai_students_hero.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Featured Banner */}
            <div className="absolute -bottom-3 md:-bottom-4 right-0 transform rotate-2 bg-modern-coral text-white px-5 py-3 rounded-xl font-medium text-sm md:text-base shadow-lg z-10">
              Get your Child Featured on the LevelUp Website
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
