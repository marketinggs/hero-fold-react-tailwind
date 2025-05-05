
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClassCardProps {
  dayOfWeek: string;
  date: string;
  classNumber: string;
  title: string;
  description: string;
  activities: { text: string; color: string }[];
  takeaway: string;
  borderColor: string;
}

const ClassCard = ({ 
  dayOfWeek, 
  date, 
  classNumber, 
  title, 
  description, 
  activities, 
  takeaway,
  borderColor 
}: ClassCardProps) => {
  return (
    <div className={`relative rounded-xl bg-white p-6 shadow-sm border-l-4 ${borderColor}`}>
      <div className="absolute right-4 top-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${classNumber === "Class 1" ? "bg-blue-100 text-blue-600" : 
          classNumber === "Class 2" ? "bg-purple-100 text-purple-600" : 
          classNumber === "Class 3" ? "bg-green-100 text-green-600" : 
          classNumber === "Class 4" ? "bg-pink-100 text-pink-600" : 
          "bg-orange-100 text-orange-600"}`}>
          {classNumber}
        </span>
      </div>
      
      <h3 className={`text-lg font-semibold mb-1 ${
        borderColor === "border-blue-500" ? "text-blue-600" : 
        borderColor === "border-purple-500" ? "text-purple-600" : 
        borderColor === "border-green-500" ? "text-green-600" : 
        borderColor === "border-pink-500" ? "text-pink-600" : 
        "text-orange-600"
      }`}>{dayOfWeek}, {date}</h3>
      
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="mb-4">
        <p className="font-medium mb-2">Activities:</p>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start">
              <span className={`inline-block w-3 h-3 rounded-full mt-1.5 mr-2 ${activity.color}`}></span>
              <span className="text-gray-600">{activity.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`mt-4 p-3 rounded-lg ${
        borderColor === "border-blue-500" ? "bg-blue-50" : 
        borderColor === "border-purple-500" ? "bg-purple-50" : 
        borderColor === "border-green-500" ? "bg-green-50" : 
        borderColor === "border-pink-500" ? "bg-pink-50" : 
        "bg-orange-50"
      }`}>
        <p className="font-medium mb-1">Takeaway:</p>
        <p className="text-gray-700">{takeaway}</p>
      </div>
    </div>
  );
};

const WorkshopScheduleSection = () => {
  const [activeWeek, setActiveWeek] = useState("week1");
  
  const week1Classes = [
    {
      dayOfWeek: "Monday",
      date: "2 June",
      classNumber: "Class 1",
      title: "Meet Your New Best Friend: AI!",
      description: "What is AI, and why is it like having a new superpower?",
      activities: [
        { text: "Speaking to AI in a fun way, in different accents, imitating Bollywood Actors and Superheroes", color: "bg-blue-400" },
        { text: "Getting guidance from your favourite superhero.", color: "bg-blue-400" }
      ],
      takeaway: "Students will get comfortable and excited to use AI for learning, creativity, and fun.",
      borderColor: "border-blue-500"
    },
    {
      dayOfWeek: "Tuesday",
      date: "3 June",
      classNumber: "Class 2",
      title: "Creative Writing & Learning using AI",
      description: "Make study notes and summaries easily.",
      activities: [
        { text: "Creating a study plan and timetable", color: "bg-purple-400" },
        { text: "Understanding every step of a new problem", color: "bg-purple-400" },
        { text: "Video calling ChatGPT and solving problems live", color: "bg-purple-400" },
        { text: "Practising critical thinking and brainstorming with AI", color: "bg-purple-400" }
      ],
      takeaway: "Students will use AI as a personal tutor for learning tough subjects and quizzing themselves.",
      borderColor: "border-purple-500"
    },
    {
      dayOfWeek: "Wednesday",
      date: "4 June",
      classNumber: "Class 3",
      title: "Increase Confidence & Presentation Skills",
      description: "Make beautiful school presentations using Gamma AI. Tips to make a school assignment look professional and more impressive.",
      activities: [
        { text: "Creating slides and text on topics for decks", color: "bg-green-400" },
        { text: "How to tell a good story in front of the class", color: "bg-green-400" },
        { text: "How to improve communication skills", color: "bg-green-400" }
      ],
      takeaway: "Students will create cool presentations and videos quickly using AI tools.",
      borderColor: "border-green-500"
    },
    {
      dayOfWeek: "Thursday",
      date: "5 June",
      classNumber: "Class 4",
      title: "Turn Your Imagination into Art with AI",
      description: "Create stunning images from your ideas (no drawing skills needed).",
      activities: [
        { text: "Design school posters and project covers.", color: "bg-pink-400" },
        { text: "Learn the basics of using images safely and ethically.", color: "bg-pink-400" },
        { text: "How to improve communication skills", color: "bg-pink-400" },
        { text: "How to design a comic book about your life.", color: "bg-pink-400" }
      ],
      takeaway: "Students will design stunning sketches, art, and illustrations using AI.",
      borderColor: "border-pink-500"
    },
    {
      dayOfWeek: "Friday",
      date: "6 June",
      classNumber: "Class 5",
      title: "Explore Your Dream Career Using AI!",
      description: "Use AI to find careers based on your interests.",
      activities: [
        { text: "Using AI as a Counsellor and Career Guide.", color: "bg-orange-400" },
        { text: "Creating dream posters of future life.", color: "bg-orange-400" },
        { text: "Understand what skills are needed for your favourite career.", color: "bg-orange-400" }
      ],
      takeaway: "Students will explore careers, find future goals, and feel excited with AI guidance.",
      borderColor: "border-orange-500"
    }
  ];
  
  // Updated Week 2 classes based on the provided image
  const week2Classes = [
    {
      dayOfWeek: "Monday",
      date: "9 June",
      classNumber: "Class 6",
      title: "Make Your Own Mini Movies with AI!",
      description: "Become your favourite superhero and create AI movies of yourself.",
      activities: [
        { text: "Put your face on your favourite superhero", color: "bg-blue-400" },
        { text: "How to generate AI voice and music", color: "bg-blue-400" },
        { text: "How to make a birthday song for your friend or family member using AI", color: "bg-blue-400" }
      ],
      takeaway: "Students will create mini movies with avatars, music, and AI voices like young directors.",
      borderColor: "border-blue-500"
    },
    {
      dayOfWeek: "Tuesday",
      date: "10 June",
      classNumber: "Class 7",
      title: "Build Your First Mini App Without Coding!",
      description: "What is no-code and why it's the future.",
      activities: [
        { text: "How to generate a website without coding", color: "bg-purple-400" },
        { text: "How to create a web app using vibe-coding", color: "bg-purple-400" },
        { text: "How to understand UX and UI Design in products", color: "bg-purple-400" }
      ],
      takeaway: "Students will build their first no-code app by learning UX and UI basics.",
      borderColor: "border-purple-500"
    },
    {
      dayOfWeek: "Wednesday",
      date: "11 June",
      classNumber: "Class 8",
      title: "Meet Your Own Personal AI Agent",
      description: "What are AI agents, and how do they help you work smarter?",
      activities: [
        { text: "How to generate an N8N Agent to do research and automation", color: "bg-green-400" },
        { text: "How to use ChatGPT APIs to create AI Agents for emailing and writing", color: "bg-green-400" }
      ],
      takeaway: "Students will learn how AI agents can become smart personal assistants.",
      borderColor: "border-green-500"
    },
    {
      dayOfWeek: "Thursday",
      date: "12 June",
      classNumber: "Class 9",
      title: "Live Homework Review",
      description: "Students ask doubts around their AI-created projects and get feedback.",
      activities: [
        { text: "Small tips to make projects even better", color: "bg-pink-400" },
        { text: "Celebrate creativity and effort in the group!", color: "bg-pink-400" }
      ],
      takeaway: "Students will gain confidence by showcasing and improving their AI-created projects.",
      borderColor: "border-pink-500"
    },
    {
      dayOfWeek: "Friday",
      date: "13 June",
      classNumber: "Class 10",
      title: "Top Showcase by Students",
      description: "Top 20 students will showcase their projects and give a presentation to the entire group.",
      activities: [],
      takeaway: "Students will present their best projects to peers and parents on the last day of this cohort.",
      borderColor: "border-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Workshop Schedule</h2>
          <p className="text-xl text-gray-600">10 engaging sessions designed to build skills progressively</p>
        </div>
        
        {/* Week Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveWeek('week1')}
              className={`rounded-full px-8 py-2.5 text-sm font-medium transition-colors ${
                activeWeek === 'week1' 
                  ? 'bg-toi-purple text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={activeWeek === 'week1'}
              aria-label="Show Week 1 schedule"
            >
              Week 1
            </button>
            <button
              onClick={() => setActiveWeek('week2')}
              className={`rounded-full px-8 py-2.5 text-sm font-medium transition-colors ${
                activeWeek === 'week2' 
                  ? 'bg-toi-purple text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={activeWeek === 'week2'}
              aria-label="Show Week 2 schedule"
            >
              Week 2
            </button>
          </div>
        </div>
        
        {/* Workshop Schedule Content */}
        <div>
          {activeWeek === "week1" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {week1Classes.map((classItem, index) => (
                <ClassCard
                  key={index}
                  dayOfWeek={classItem.dayOfWeek}
                  date={classItem.date}
                  classNumber={classItem.classNumber}
                  title={classItem.title}
                  description={classItem.description}
                  activities={classItem.activities}
                  takeaway={classItem.takeaway}
                  borderColor={classItem.borderColor}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {week2Classes.map((classItem, index) => (
                <ClassCard
                  key={index}
                  dayOfWeek={classItem.dayOfWeek}
                  date={classItem.date}
                  classNumber={classItem.classNumber}
                  title={classItem.title}
                  description={classItem.description}
                  activities={classItem.activities}
                  takeaway={classItem.takeaway}
                  borderColor={classItem.borderColor}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkshopScheduleSection;
