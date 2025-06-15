
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="font-helvetica text-2xl font-bold text-foreground">
              Music<span className="text-primary">coinx</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-helvetica">
              How It Works
            </a>
            <a href="#for-artists" className="text-muted-foreground hover:text-primary transition-colors font-helvetica">
              For Artists
            </a>
            <a href="#for-fans" className="text-muted-foreground hover:text-primary transition-colors font-helvetica">
              For Fans
            </a>
            <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors font-helvetica">
              Marketplace
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-helvetica">
              Connect Wallet
            </Button>
            <Button className="bg-primary hover:bg-primary/90 font-helvetica">
              Explore Music
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
