import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@beheerd.events",
      href: "mailto:support@beheerd.events"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+31 (0) 20 123 4567",
      href: "tel:+31201234567"
    },
    {
      icon: MapPin,
      title: "Location", 
      value: "Netherlands",
      href: null
    },
    {
      icon: Clock,
      title: "Emergency Support",
      value: "24/7 During Exercises",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">GET</span>
            <span className="text-primary"> PROFESSIONAL</span>
            <br />
            <span className="text-foreground">SUPPORT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to ensure your next oil spill exercise has complete technical infrastructure including AV, 
            live streaming, and hybrid participation? Contact our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="card-shadow border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="card-shadow border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our team is ready to discuss your oil spill exercise requirements and provide 
                  a comprehensive technical solution including AV, streaming, and hybrid participation tailored to your specific needs.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">Exercise Planning Phase</h3>
                    <p className="text-sm text-muted-foreground">
                      Contact us during planning to ensure all technical requirements are met
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">Hybrid Exercise Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration of onsite command centers with remote participants and live streaming
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">24/7 Exercise Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock technical support throughout your exercise duration
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg transition-smooth"
                    onClick={() => window.location.href = 'mailto:support@beheerd.events?subject=Oil Spill Exercise Support Request'}
                  >
                    Request Support Quote
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.location.href = 'tel:+31201234567'}
                  >
                    Call Emergency Line
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;