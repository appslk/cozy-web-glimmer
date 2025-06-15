import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bell } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/90 backdrop-blur-sm border-border shadow-2xl shadow-primary/10 overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Bell className="h-10 w-10 text-primary animate-pulse" />
              </div>

              <h2 className="font-helvetica text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Join the Movement
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-helvetica">
                Be the first to know about exclusive drops, platform updates, 
                and opportunities to shape the future of music ownership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-input/50 backdrop-blur-sm border-border focus:border-primary font-helvetica"
                />
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-helvetica px-8 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get Updates
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="font-helvetica">Exclusive drops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <span className="font-helvetica">Platform updates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span className="font-helvetica">Community events</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 font-helvetica">
                No spam, unsubscribe at any time. Your privacy is our priority.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;