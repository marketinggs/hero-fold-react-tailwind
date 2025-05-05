
import HeroSection from "@/components/HeroSection";
import ProgrammeHighlightsSection from "@/components/ProgrammeHighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkshopScheduleSection from "@/components/WorkshopScheduleSection";
import LogoLinksSection from "@/components/LogoLinksSection";
import ExpertsSection from "@/components/ExpertsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ProgrammeHighlightsSection />
      <WorkshopScheduleSection />
      <ExpertsSection />
      <LogoLinksSection />
      
      {/* Additional sections will be added in future updates */}
    </div>
  );
};

export default Index;
