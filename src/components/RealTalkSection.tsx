
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const RealTalkSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Real Talk */}
        <Card className="bg-card/80 backdrop-blur-sm border-border mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-500/10 rounded-full flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-orange-500" />
              </div>
              <h2 className="font-helvetica text-3xl font-bold mb-4 text-foreground">
                Real Talk (No Hype, Just Facts)
              </h2>
            </div>
            
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground font-helvetica">You earn when artists choose to share royalties via Musecoinx.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground font-helvetica">NFTs don't give you copyrights. You're not co-writing — just co-earning.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground font-helvetica">No guaranteed returns. This is belief + blockchain, not a quick flip.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Marketplace Preview */}
        <div id="marketplace" className="text-center mb-16">
          <h2 className="font-helvetica text-4xl font-bold mb-8 text-foreground">
            Marketplace Preview
          </h2>
          
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Play className="h-8 w-8 text-primary mr-3" />
                <span className="font-helvetica text-lg text-foreground">New Drop: 17-year-old producer from Liverpool</span>
              </div>
              <p className="text-muted-foreground font-helvetica mb-4">
                You hit play. It's pure heat.
              </p>
              <p className="text-primary font-helvetica font-semibold">
                You own 0.5% before it goes viral.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Launch Feature */}
        <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
          <CardContent className="p-8 text-center">
            <h3 className="font-helvetica text-2xl font-bold mb-4 text-foreground">
              Launching With: "Asha" by Shruti Music School
            </h3>
            <p className="text-muted-foreground font-helvetica mb-2">
              Featuring KK — yes, the Bollywood legend.
            </p>
            <p className="text-muted-foreground font-helvetica mb-6">
              Limited NFTs. Real royalties. Real legacy.
              Be an early fan = Become a Day 1 co-owner.
            </p>
            <Button className="bg-accent hover:bg-accent/90 font-helvetica">
              Get Early Access
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RealTalkSection;
