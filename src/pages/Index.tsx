
import HeroSection from "@/components/HeroSection";
import LogoLinksSection from "@/components/LogoLinksSection";
import ProgrammeHighlightsSection from "@/components/ProgrammeHighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkshopScheduleSection from "@/components/WorkshopScheduleSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LogoLinksSection />
      <ProjectsSection />
      <SkillsSection />
      <ProgrammeHighlightsSection />
      <WorkshopScheduleSection />
      
      {/* Additional sections will be added in future updates */}
    </div>
  );
};

export default Index;
