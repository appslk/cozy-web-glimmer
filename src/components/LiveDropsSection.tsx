import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Music, Zap } from "lucide-react";

const LiveDropsSection = () => {
  const drops = [
    {
      title: "Midnight Frequencies",
      artist: "Neon Pulse",
      price: "0.5 ETH",
      timeLeft: "2h 34m",
      status: "live",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Digital Dreams",
      artist: "Cyber Melody",
      price: "0.3 ETH",
      timeLeft: "6h 12m",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Bass Revolution",
      artist: "Echo Chamber",
      price: "0.8 ETH",
      timeLeft: "1d 4h",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Live Drops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica">
            Don't miss out on exclusive music NFT releases from top artists. 
            Preview tracks and mint your favorites before they're gone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drops.map((drop, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={drop.image} 
                  alt={drop.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={drop.status === 'live' ? 'default' : 'secondary'}
                    className={`font-helvetica ${drop.status === 'live' ? 'bg-primary text-primary-foreground animate-pulse' : ''}`}
                  >
                    {drop.status === 'live' ? (
                      <>
                        <Zap className="w-3 h-3 mr-1" />
                        LIVE
                      </>
                    ) : (
                      'UPCOMING'
                    )}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-helvetica text-xl font-semibold mb-2 text-foreground">
                  {drop.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-helvetica">
                  by {drop.artist}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-helvetica text-sm">{drop.timeLeft}</span>
                  </div>
                  <div className="text-primary font-helvetica font-semibold">
                    {drop.price}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 font-helvetica border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-helvetica"
                  >
                    Mint Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDropsSection;