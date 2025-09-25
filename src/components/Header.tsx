import { Button } from "@/components/ui/button";
import BeheerdLogo from "@/components/ui/beheerd-logo";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <BeheerdLogo variant="light" size="md" />
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            About
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;