
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ArtistsAndFansSection from "@/components/ArtistsAndFansSection";
import RealTalkSection from "@/components/RealTalkSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-helvetica">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ArtistsAndFansSection />
      <RealTalkSection />
      <Footer />
    </div>
  );
};

export default Index;
