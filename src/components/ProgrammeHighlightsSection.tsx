
import React from 'react';
import { FileText, Users, Puzzle, Wrench, Video, Award } from 'lucide-react';

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const HighlightCard = ({ 
  icon, 
  title, 
  description,
  bgColor,
  textColor
}: HighlightCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-start gap-3">
        <div className={`${bgColor} p-3 rounded-md`}>
          <div className={`${textColor}`}>
            {icon}
          </div>
        </div>
        <h3 className={`text-xl font-bold ${textColor}`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const ProgrammeHighlightsSection = () => {
  const highlights = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Moment of Pride",
      description: "Your Child's Project Will Be Featured in The Times of India – Digital",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert-Led Workshop",
      description: "20+ Hours of Transformative Learning with industry experts",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Interactive Learning",
      description: "6 engaging activities designed for practical application",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Cutting-Edge AI Tools",
      description: "Hands-On to 10+ AI tools to elevate your kid's learning",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Same-Day Class Recordings",
      description: "Recordings are made available the same day and stay accessible for a full year!",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "TOI Certification",
      description: "Industry-recognized certification from The Times of India",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-[#f0f5ff]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Programme Highlights</h2>
          <p className="text-xl text-gray-600">What makes our AI Workshop special</p>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <HighlightCard 
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              bgColor={highlight.bgColor}
              textColor={highlight.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeHighlightsSection;
