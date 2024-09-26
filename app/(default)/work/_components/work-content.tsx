import HeroSection from "@/components/hero-section";
import ResumeSection from "./resume-section";
import TechStackSection from "./tech-stack-section";
import fetchWork from "@/microcms/api/work";
import { mainTitle, TechStack } from "@/microcms/const";

export async function WorkContent() {
  const resume = await fetchWork();

  return (
    <div>
      <HeroSection title={mainTitle} description={mainTitle} />
      <ResumeSection resumeData={resume.contents} />
      <TechStackSection techStackData={TechStack} />
    </div>
  );
}
