import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Music, Trophy, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Wallet,
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet to access the platform and start your music NFT journey."
    },
    {
      number: "02", 
      icon: Music,
      title: "Mint Music NFTs",
      description: "Discover exclusive tracks and mint your favorite music as unique digital collectibles."
    },
    {
      number: "03",
      icon: Trophy,
      title: "Earn Rewards",
      description: "Participate in the ecosystem and earn rewards through staking, trading, and community engagement."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica">
            Get started with music NFTs in three simple steps. 
            Join thousands of collectors and artists already on the platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group text-center">
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
                  <h3 className="font-helvetica text-2xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-helvetica leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="font-helvetica">Ready to start your journey?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;