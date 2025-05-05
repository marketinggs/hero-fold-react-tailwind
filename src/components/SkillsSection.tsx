
import React from 'react';
import { Star, Mic, Video, Palette, Bot } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefitTitle: string;
  benefitDescription: string;
  bgColor: string;
}

const SkillCard = ({ 
  icon, 
  title, 
  description, 
  benefitTitle, 
  benefitDescription,
  bgColor
}: SkillCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4 mb-4">
        <div className={`${bgColor} p-3 rounded-full`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className={`${bgColor} bg-opacity-10 rounded-lg p-4`}>
        <div className="flex items-start gap-2">
          <Star className="h-5 w-5 text-[#6747fb] mt-0.5" />
          <div>
            <h4 className="font-medium text-[#6747fb] mb-1">{benefitTitle}</h4>
            <p className="text-gray-600 text-sm">{benefitDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: <Bot className="h-6 w-6 text-[#6747fb]" />,
      title: "Personalized AI Tutor Experience",
      description: "Use AI to address doubts instantly, ensuring no topic is left unclear.",
      benefitTitle: "How it benefits:",
      benefitDescription: "This personalized support helps your child stay ahead in academics, learning at their own pace and mastering difficult topics with ease.",
      bgColor: "bg-indigo-100"
    },
    {
      icon: <Palette className="h-6 w-6 text-[#6747fb]" />,
      title: "Creativity Across Fields",
      description: "Build practical projects like websites and digital art, fostering creativity in multiple fields.",
      benefitTitle: "How it benefits:",
      benefitDescription: "This early, hands-on engagement ensures kids are not just consumers of technology, but future creators and leaders in a digital-first world.",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Mic className="h-6 w-6 text-[#6747fb]" />,
      title: "Communication Skills",
      description: "Learn to structure and present ideas clearly, create engaging presentations, and master storytelling with AI tools.",
      benefitTitle: "How it benefits:",
      benefitDescription: "Will empower your child to become a confident speaker, ready for future careers that require public speaking and clear expression.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Video className="h-6 w-6 text-[#6747fb]" />,
      title: "AI Avatars & Video Content",
      description: "Use AI to create awesome videos for school projects, tutorials, or fun messages from favorite characters.",
      benefitTitle: "How it benefits:",
      benefitDescription: "AI helps bring ideas to life quickly and easily, making learning and sharing information more engaging and fun.",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className="py-16 bg-[#f8f5ff]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">What Your Child Will Learn</h2>
          <p className="text-xl text-gray-600">Practical AI skills that help your child excel in school and beyond</p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              benefitTitle={skill.benefitTitle}
              benefitDescription={skill.benefitDescription}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
