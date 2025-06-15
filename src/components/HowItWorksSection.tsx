
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Music, Share, Trophy } from "lucide-react";

const HowItWorksSection = () => {
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
    <section id="how-it-works" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How It Works (Straight Talk)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group text-center h-full">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground font-helvetica shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-helvetica text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-helvetica leading-relaxed">
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
