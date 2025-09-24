import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">PROFESSIONAL</span>
            <br />
            <span className="text-primary">IT SUPPORT</span>
            <br />
            <span className="text-foreground">FOR OIL SPILL</span>
            <br />
            <span className="text-foreground">EXERCISES</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Comprehensive IT infrastructure, AV systems, and trained ICS personnel for oil spill emergency response exercises. 
            From command center networks to live streaming and hybrid participation - complete technical solutions when it matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-smooth"
            >
              Get Professional Support
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;