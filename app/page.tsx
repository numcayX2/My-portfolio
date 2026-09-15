import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjectsSection from "@/components/OtherProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <OtherProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
