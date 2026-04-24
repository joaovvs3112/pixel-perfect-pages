import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReactiveBackground from "@/components/ui/ReactiveBackground";
import ProblemSection from "@/components/ProblemSection";
import TurningPointSection from "@/components/TurningPointSection";
import SolutionSection from "@/components/SolutionSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IncludedSection from "@/components/IncludedSection";
import ForWhoSection from "@/components/ForWhoSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MainFloatingElements from "@/components/MainFloatingElements";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <ReactiveBackground />
      <MainFloatingElements />
      <Header />
      <HeroSection />
      <ProblemSection />
      <TurningPointSection />
      <SolutionSection />
      <PortfolioSection />
      <HowItWorksSection />
      <IncludedSection />
      <ForWhoSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
