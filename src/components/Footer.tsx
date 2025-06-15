import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, MessageSquare, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: MessageSquare, label: "Discord", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  const footerSections = [
    {
      title: "Platform",
      links: ["Marketplace", "Mint NFTs", "Artist Portal", "Governance"]
    },
    {
      title: "Resources", 
      links: ["Documentation", "API", "Tutorials", "FAQ"]
    },
    {
      title: "Community",
      links: ["Discord", "Forum", "Blog", "Events"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "DMCA"]
    }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-helvetica text-2xl font-bold text-foreground mb-4">
              Music<span className="text-primary">Web3</span>
            </h3>
            <p className="text-muted-foreground font-helvetica mb-6 max-w-sm">
              The future of music ownership. Discover, collect, and trade music NFTs 
              on the first truly decentralized music platform.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-10 h-10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-helvetica font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground font-helvetica text-sm">
            © 2024 MusicWeb3. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;