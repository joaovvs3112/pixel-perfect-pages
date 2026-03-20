import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReactiveBackground from "@/components/ui/ReactiveBackground";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PortfolioSection from "@/components/PortfolioSection";
import IncludedSection from "@/components/IncludedSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForWhoSection from "@/components/ForWhoSection";
import AuthoritySection from "@/components/AuthoritySection";
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
      <SolutionSection />
      <PortfolioSection />
      <IncludedSection />
      <HowItWorksSection />
      <ForWhoSection />
      <AuthoritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
