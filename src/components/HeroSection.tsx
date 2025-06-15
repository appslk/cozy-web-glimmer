
import { Button } from "@/components/ui/button";
import { Wallet, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-white/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/80 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-helvetica text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Musecoinx
        </h1>
        
        <h2 className="font-helvetica text-3xl md:text-4xl font-semibold mb-6 text-white">
          Wanna Own the Next Ed Sheeran Track?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-helvetica">
          Why just stream music when you can own a piece of it?
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto font-helvetica">
          Wish you'd invested in Ed Sheeran when he was busking? Or Billie Eilish pre-Grammys?
          Now you can — before the world catches on. Welcome to Musecoinx.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-white/90 font-helvetica text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Music
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-purple-900 font-helvetica text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
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
