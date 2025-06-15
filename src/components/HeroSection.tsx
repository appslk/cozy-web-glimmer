import { Button } from "@/components/ui/button";
import { Wallet, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-helvetica text-6xl md:text-8xl font-bold mb-6 text-foreground">
          The Future of
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Music Ownership
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-helvetica">
          Discover, mint, and trade music NFTs on the first decentralized platform 
          for musicians and collectors.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-helvetica text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Music
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-helvetica text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-card/30 transition-all duration-300 transform hover:scale-105"
          >
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;