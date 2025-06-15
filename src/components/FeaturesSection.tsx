import { Card, CardContent } from "@/components/ui/card";
import { Store, DollarSign, Users, Key } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Store,
      title: "NFT Marketplace",
      description: "Buy, sell, and trade music NFTs in a seamless marketplace designed for creators and collectors.",
      gradient: "from-primary to-accent"
    },
    {
      icon: DollarSign,
      title: "Smart Contract Royalties",
      description: "Automated royalty distribution ensures artists earn from every resale forever.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Community-driven decisions shape the platform's future through decentralized governance.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Key,
      title: "Wallet-Based Access",
      description: "Secure, decentralized authentication using your Web3 wallet for seamless access.",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica">
            Experience the power of Web3 technology with features designed 
            to empower artists and revolutionize music ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-helvetica text-2xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-helvetica leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;