import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDropsSection from "@/components/LiveDropsSection";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import HowItWorksSection from "@/components/HowItWorksSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-helvetica">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <LiveDropsSection />
      <ArtistSpotlight />
      <HowItWorksSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
