
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

interface MentorProps {
  name: string;
  title: string;
  image: string;
  bio: string[];
  linkedinUrl?: string;
}

const Mentor: React.FC<MentorProps> = ({ name, title, image, bio, linkedinUrl }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-white rounded-2xl p-6 shadow-md">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={`${name} - ${title}`}
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:w-2/3 lg:w-3/4 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700 font-playfair">{name}</h3>
        <p className="text-gray-700 font-medium">{title}</p>
        
        <div className="space-y-3">
          {bio.map((paragraph, index) => (
            <p key={index} className="text-gray-600">{paragraph}</p>
          ))}
        </div>
        
        {linkedinUrl && (
          <Button className="bg-[#0077B5] hover:bg-[#005582] mt-4">
            <Linkedin className="mr-2 h-4 w-4" /> View LinkedIn Profile
          </Button>
        )}
      </div>
    </div>
  );
};

const ExpertsSection = () => {
  const mentors: MentorProps[] = [
    {
      name: "Ansh Mehra",
      title: "Founder & CEO at the Cutting Edge School",
      image: "https://img.etb2bimg.com/files/retail_files/file_1745846513_create_byow_min.png",
      bio: [
        "Ansh Mehra is the Founder & CEO of The Cutting Edge School, a brand that has trained teams at Dubai Future Foundation, Dubai Holdings, Lenskart, Reliance Digital, HP, Intel, and other global enterprises.",
        "He specializes in AI-driven productivity, workflow automation, and prompt engineering for professionals across product, design, and marketing teams.",
        "His masterclasses have been hosted at IIM Bangalore, IIM Ahmedabad, IIT Delhi, IIT Bombay, IIT Madras and many more."
      ],
      linkedinUrl: "https://www.linkedin.com/in/anshmehra/",
    },
    {
      name: "Sarah Johnson",
      title: "AI Education Director & Machine Learning Specialist",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: [
        "Sarah Johnson brings over 15 years of experience in AI education and implementation across Fortune 500 companies and educational institutions.",
        "She has developed AI curriculum for K-12 students that has been adopted by over 200 schools across North America and Europe.",
        "Sarah holds a PhD in Computer Science from Stanford University and has published numerous papers on making AI accessible to young learners."
      ],
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Michael Chen",
      title: "EdTech Innovator & AI Curriculum Developer",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      bio: [
        "Michael Chen is a pioneer in developing interactive AI learning experiences for students aged 8-18, with a focus on ethical AI use and creative applications.",
        "Previously, he led the educational technology division at Google, where he helped launch AI learning platforms reaching millions of students worldwide.",
        "He is the author of 'AI for Young Minds' and has been featured in TED Talks discussing the future of AI in education."
      ],
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">About The Experts</h2>
          <p className="text-xl text-gray-600">Learn from industry leaders in AI education</p>
        </div>
        
        <div className="space-y-10">
          {mentors.map((mentor, index) => (
            <Mentor 
              key={index}
              name={mentor.name}
              title={mentor.title}
              image={mentor.image}
              bio={mentor.bio}
              linkedinUrl={mentor.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
