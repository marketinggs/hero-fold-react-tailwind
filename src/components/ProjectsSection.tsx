import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
interface ProjectCardProps {
  image: string;
  title: string;
  features: string[];
  altText: string;
}
const ProjectCard = ({
  image,
  title,
  features,
  altText
}: ProjectCardProps) => {
  return <Card className="overflow-hidden border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={altText} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => <li key={index} className="flex gap-2">
              <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>)}
        </ul>
      </CardContent>
    </Card>;
};
const ProjectsSection = () => {
  const projects = [{
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846513_create_byow_min.png",
    title: "Build Your Own Website—for School or Just for Fun!",
    altText: "Children building a website on computer",
    features: ["Learn to make a site to showcase your science project—and share it with classmates and teachers!", "Publish your poems, stories, or artwork on a blog to showcase your creativity."]
  }, {
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846581_create_research_min.png",
    title: "A Mini Research Report using Smart Search Tools",
    altText: "Students researching on a laptop",
    features: ["Find correct, interesting information super fast for school projects—using AI search assistants!", "Learn how to check if what you find is true and reliable—and build your own mini research report."]
  }, {
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846567_create_quizzes_min.png",
    title: "Design Fun Games and Quizzes with AI Tools",
    altText: "Students creating games and quizzes",
    features: ["Make your own quiz on dinosaurs, math puzzles, or superhero facts—and challenge your friends!", "Learn how games and quizzes make learning exciting and super fun!"]
  }, {
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846531_create_presentations_min.png",
    title: "Create Impressive School Projects and Presentations",
    altText: "Students making a presentation in classroom",
    features: ["Make awesome slides with cool pictures and facts super quickly — and talk about them with confidence!", "Make a travel brochure for a history lesson or a comic strip for a science topic!"]
  }, {
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846611_create_video_min.png",
    title: "Create Stunning Images and Videos – Powered by AI",
    altText: "Students recording videos outdoors",
    features: ["Create a full project video—with narration and visuals—all by themselves!", "Turn your understanding of a topic like volcanoes, electricity, or World War II into short, engaging explainer videos with visuals and voiceover."]
  }, {
    image: "https://img.etb2bimg.com/files/retail_files/file_1745846548_create_publicspeaking_min.png",
    title: "Master Storytelling & Public Speaking",
    altText: "Student giving a presentation to class",
    features: ["Learn to confidently present ideas while mastering storytelling and public speaking.", "Use AI to create stories, script speeches, and practice delivery, boosting confidence and presentation skills."]
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">What Your Child Will Create</h2>
          <p className="text-xl text-gray-600">Hands-on projects that make learning AI fun and engaging</p>
          
          {/* Progress Indicator */}
          
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} image={project.image} title={project.title} features={project.features} altText={project.altText} />)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;