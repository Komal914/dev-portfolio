import { Fragment } from "react";
import NavigationSection from "./page-sections/navigation-section.component";
import IntroductionSection from "./page-sections/introduction-section.component";
import ExperienceSection from "./page-sections/experience-section.component";
import ProjectGridSection from "./page-sections/project-grid-section.component";
import RecommendationsSection from "./page-sections/recomendations-slider.component";
import FloatingParticles from "./components/shared-components/floating-particles/floating-particles.component";

const App = () => {
  return (
    <Fragment>
      <NavigationSection></NavigationSection>
      <IntroductionSection></IntroductionSection>
      <ExperienceSection></ExperienceSection>
      <ProjectGridSection></ProjectGridSection>
      <RecommendationsSection></RecommendationsSection>
      <FloatingParticles></FloatingParticles>
    </Fragment>
  );
};

export default App;
