
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      
      {/* Additional sections will be added in future updates */}
    </div>
  );
};

export default Index;
