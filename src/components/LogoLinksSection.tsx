
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface LogoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
        <div className="h-16 flex items-center justify-center mb-2">
          <img 
            src={imageUrl} 
            alt={`${title} logo`} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const LogoLinksSection = () => {
  const logoCards = [
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1740493930_chatgpt.png",
      title: "ChatGPT",
      description: "Conversations That Unlock Strategy"
    },
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1744897765_Notion.png",
      title: "Notion",
      description: "Documentation & Learning"
    },
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1744897943_image_4_.png",
      title: "Todoist",
      description: "Stay Ahead, One Task at a Time"
    },
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1744896418_image_removebg_preview_2_1.png",
      title: "Ideogram",
      description: "Typography Meets Image — Communicate in Style"
    },
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1745864184_lovable_1_.png",
      title: "Lovable",
      description: "No-Code Web Apps"
    },
    {
      imageUrl: "https://img.etb2bimg.com/files/retail_files/file_1744898221_image_7_.png",
      title: "N8N",
      description: "Custom Automations for Agentic Workflows"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Learn by Doing</h2>
          <p className="text-xl text-gray-600">Hands-On with No-Code Gen AI Tools!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoCards.map((card, index) => (
            <LogoCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-700 text-lg">
          ...and many more tools for productivity, social media, and agentic workflows!
        </div>
      </div>
    </section>
  );
};

export default LogoLinksSection;
