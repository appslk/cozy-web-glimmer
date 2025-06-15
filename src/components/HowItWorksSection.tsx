
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Music, Share, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1, 0);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation(0.1, 200);

  const steps = [
    {
      number: "01",
      icon: Music,
      title: "Artists mint original tracks as NFTs",
      description: "These are limited-edition digital assets backed by real royalty rights."
    },
    {
      number: "02", 
      icon: Wallet,
      title: "Fans and collectors buy song shares",
      description: "You're not just listening — you're co-investing in the artist's journey."
    },
    {
      number: "03",
      icon: Share,
      title: "Share it, stream it, hype it",
      description: "The more traction it gets, the more revenue it earns. You benefit too."
    },
    {
      number: "04",
      icon: Trophy,
      title: "Earn when it gets played",
      description: "If the song earns royalties (Spotify, YouTube, etc.), your share hits your wallet. No middlemen."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-white bg-clip-text text-transparent">
            How It Works (Straight Talk)
          </h2>
        </div>

        <div 
          ref={stepsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative z-10 transition-all duration-700 transform ${
                stepsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: stepsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <Card className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-300 group text-center h-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white font-helvetica shadow-lg group-hover:animate-pulse">
                    {step.number}
                  </div>

                  <div className="w-20 h-20 mx-auto mb-6 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="font-helvetica text-xl font-semibold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-helvetica leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
