
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ArtistsAndFansSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1, 0);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1, 300);

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* For Artists */}
          <Card 
            id="for-artists" 
            className={`bg-card/80 backdrop-blur-sm border-border transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
              cardsVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Mic className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-helvetica text-3xl font-bold mb-4 text-foreground">
                  For Artists — Up-and-Coming or Established
                </h2>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Drop your music.</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Let fans co-invest and amplify your reach.</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Share the royalties. Build a community that backs your success.</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground font-helvetica">
                Whether you're just starting out or have a catalogue that deserves more, Musecoinx helps you engage, monetize, and grow in new ways.
              </p>
            </CardContent>
          </Card>

          {/* For Fans */}
          <Card 
            id="for-fans" 
            className={`bg-card/80 backdrop-blur-sm border-border transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary/10 ${
              cardsVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: cardsVisible ? '200ms' : '0ms' }}
          >
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="font-helvetica text-3xl font-bold mb-4 text-foreground">
                  For Fans & Collectors
                </h2>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Discover fresh talent and back them early.</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Own a slice of the song — and share in potential royalties.</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground font-helvetica">Think A&R meets Web3: it's your ear + your belief + your gain.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtistsAndFansSection;
