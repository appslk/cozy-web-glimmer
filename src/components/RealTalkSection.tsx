
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RealTalkSection = () => {
  const { ref: realTalkRef, isVisible: realTalkVisible } = useScrollAnimation(0.1, 0);
  const { ref: marketplaceRef, isVisible: marketplaceVisible } = useScrollAnimation(0.1, 200);
  const { ref: launchRef, isVisible: launchVisible } = useScrollAnimation(0.1, 400);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Real Talk */}
        <Card 
          ref={realTalkRef}
          className={`bg-white border-gray-200 shadow-md mb-16 transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 ${
            realTalkVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center animate-bounce">
                <AlertCircle className="h-10 w-10 text-orange-500" />
              </div>
              <h2 className="font-helvetica text-3xl font-bold mb-4 bg-gradient-to-r from-purple-900 to-orange-500 bg-clip-text text-transparent">
                Real Talk (No Hype, Just Facts)
              </h2>
            </div>
            
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 font-helvetica">You earn when artists choose to share royalties via Musecoinx.</span>
              </li>
              <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 font-helvetica">NFTs don't give you copyrights. You're not co-writing — just co-earning.</span>
              </li>
              <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 font-helvetica">No guaranteed returns. This is belief + blockchain, not a quick flip.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Marketplace Preview */}
        <div 
          ref={marketplaceRef}
          id="marketplace" 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            marketplaceVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-helvetica text-4xl font-bold mb-8 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Marketplace Preview
          </h2>
          
          <Card className="bg-gradient-to-r from-purple-50 to-white border-primary/20 max-w-2xl mx-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Play className="h-8 w-8 text-primary mr-3 animate-pulse" />
                <span className="font-helvetica text-lg text-gray-900">New Drop: 17-year-old producer from Liverpool</span>
              </div>
              <p className="text-gray-600 font-helvetica mb-4">
                You hit play. It's pure heat.
              </p>
              <p className="text-primary font-helvetica font-semibold">
                You own 0.5% before it goes viral.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Launch Feature */}
        <Card 
          ref={launchRef}
          className={`bg-gradient-to-r from-purple-50 to-white border-purple-200 transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 shadow-md ${
            launchVisible 
              ? 'opacity-100 translate-y-0 rotate-0' 
              : 'opacity-0 translate-y-20 rotate-3'
          }`}
        >
          <CardContent className="p-8 text-center">
            <h3 className="font-helvetica text-2xl font-bold mb-4 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Launching With: "Asha" by Shruti Music School
            </h3>
            <p className="text-gray-600 font-helvetica mb-2">
              Featuring KK — yes, the Bollywood legend.
            </p>
            <p className="text-gray-600 font-helvetica mb-6">
              Limited NFTs. Real royalties. Real legacy.
              Be an early fan = Become a Day 1 co-owner.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 font-helvetica transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
              Get Early Access
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RealTalkSection;
