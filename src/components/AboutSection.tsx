import { Card, CardContent } from "@/components/ui/card";
import { Music, Shield, Trophy, Map } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Music,
      title: "Music NFTs",
      description: "Transform your music into unique digital assets with verifiable ownership."
    },
    {
      icon: Shield,
      title: "True Ownership",
      description: "Artists and fans have complete control over their digital music collections."
    },
    {
      icon: Trophy,
      title: "Creator Rewards",
      description: "Smart contracts ensure artists earn royalties from every transaction."
    },
    {
      icon: Map,
      title: "Roadmap Vision",
      description: "Building the infrastructure for the next generation of music distribution."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About Our Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica">
            We're revolutionizing the music industry by creating a decentralized ecosystem 
            where artists maintain ownership and fans become true collectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-helvetica text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-helvetica">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;