import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Emergency Response Expertise",
      description: "Specialized in critical infrastructure for oil spill response exercises and emergency scenarios"
    },
    {
      icon: Clock,
      title: "24/7 Support Ready",
      description: "Round-the-clock technical support during exercises, ensuring operations never stop"
    },
    {
      icon: CheckCircle,
      title: "ICS Certified Personnel",
      description: "Our team includes trained and certified Incident Command System professionals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">EXPERT</span>
              <span className="text-primary"> EMERGENCY</span>
              <br />
              <span className="text-foreground">RESPONSE SUPPORT</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Beheerd.Events specializes in providing comprehensive IT infrastructure and technical support 
              for oil spill emergency response exercises. Our expertise ensures that communication systems, 
              data networks, and documentation processes run flawlessly during critical training scenarios.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From command center setup to mobile field operations, we deliver the technical backbone 
              that emergency response teams depend on. Our certified ICS personnel understand the unique 
              requirements of emergency exercises and provide seamless integration with existing protocols.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-shadow border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Why Choose Beheerd.Events?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Specialized in emergency response scenarios</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Complete technical infrastructure solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Certified ICS personnel on staff</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Professional printing solutions (A0-A4)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Proven track record in exercise support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;