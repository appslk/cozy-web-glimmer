
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="font-helvetica text-2xl font-bold text-gray-900">
              Music<span className="text-primary">coinx</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-helvetica">
              How It Works
            </a>
            <a href="#for-artists" className="text-gray-600 hover:text-primary transition-colors font-helvetica">
              For Artists
            </a>
            <a href="#for-fans" className="text-gray-600 hover:text-primary transition-colors font-helvetica">
              For Fans
            </a>
            <a href="#marketplace" className="text-gray-600 hover:text-primary transition-colors font-helvetica">
              Marketplace
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-helvetica border-gray-300 text-gray-700 hover:bg-gray-50">
              Connect Wallet
            </Button>
            <Button className="bg-primary hover:bg-primary/90 font-helvetica">
              Explore Music
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden border-gray-300">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
