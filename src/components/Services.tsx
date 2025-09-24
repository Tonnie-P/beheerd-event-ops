import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Printer, Laptop, Phone, Network, Users, Video, Monitor, Radio, Globe } from "lucide-react";

// Fixed: Radio icon used for Live Streaming (Broadcast is not available in lucide-react)

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Complete network setup and management for exercise command centers, ensuring reliable connectivity for all operations."
    },
    {
      icon: Wifi,
      title: "Wireless Systems", 
      description: "Professional WiFi deployment and management, providing seamless connectivity across exercise areas and mobile units."
    },
    {
      icon: Video,
      title: "Audio Visual Systems",
      description: "Professional AV equipment setup including large displays, sound systems, and presentation technology for command centers."
    },
    {
      icon: Monitor,
      title: "Teams Room Setups",
      description: "Complete Microsoft Teams rooms configuration with cameras, microphones, and displays for seamless video collaboration."
    },
    {
      icon: Radio,
      title: "Live Streaming",
      description: "Professional live streaming solutions for exercise documentation, training purposes, and stakeholder observation."
    },
    {
      icon: Globe,
      title: "Hybrid Exercise Support",
      description: "Integrated solutions enabling both onsite command post operations and remote participant engagement simultaneously."
    },
    {
      icon: Printer,
      title: "Professional Printing",
      description: "A3, A4, and A0 printing solutions for maps, reports, and documentation. On-site technical support included."
    },
    {
      icon: Laptop,
      title: "Laptop & Workstations",
      description: "Fully configured mobile workstations and laptops ready for immediate deployment in exercise scenarios."
    },
    {
      icon: Phone,
      title: "DECT Phone Systems",
      description: "Wireless DECT communication systems ensuring clear, reliable voice communication during critical operations."
    },
    {
      icon: Users,
      title: "Trained ICS Personnel",
      description: "Skilled and certified Incident Command System (ICS) professionals to support your exercise operations."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">SPECIALIZED</span>
            <span className="text-primary"> IT SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete technical infrastructure, AV systems, and hybrid exercise support for modern emergency response training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-shadow hover:shadow-large transition-smooth border-border hover:border-primary/50 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;