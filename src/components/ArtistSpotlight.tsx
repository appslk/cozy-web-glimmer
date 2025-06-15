import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Music } from "lucide-react";

const ArtistSpotlight = () => {
  const artists = [
    {
      name: "Neon Pulse",
      genre: "Synthwave",
      followers: "12.5K",
      totalTracks: 24,
      verified: true,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center",
      description: "Pioneer of digital soundscapes merging retro aesthetics with futuristic beats."
    },
    {
      name: "Cyber Melody",
      genre: "Electronic",
      followers: "8.2K",
      totalTracks: 18,
      verified: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=center",
      description: "Creating immersive electronic experiences that transport listeners to digital realms."
    },
    {
      name: "Echo Chamber",
      genre: "Ambient",
      followers: "15.7K",
      totalTracks: 32,
      verified: false,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop&crop=center",
      description: "Atmospheric compositions that blend organic and synthetic elements seamlessly."
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Artist Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica">
            Discover groundbreaking artists who are shaping the future of music through 
            innovative NFT collections and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                
                {artist.verified && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground font-helvetica">
                      Verified
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-helvetica text-xl font-semibold text-foreground mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-primary font-helvetica font-medium">
                      {artist.genre}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 font-helvetica leading-relaxed">
                  {artist.description}
                </p>
                
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-helvetica">{artist.followers}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Music className="w-4 h-4 mr-2" />
                    <span className="font-helvetica">{artist.totalTracks} tracks</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 font-helvetica border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    View Profile
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-helvetica"
                  >
                    <ExternalLink className="w-4 h-4" />
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

export default ArtistSpotlight;