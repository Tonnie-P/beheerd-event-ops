const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">ON</span>
            </div>
            <span className="text-lg font-bold tracking-wider">BEHEERD.EVENTS</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              Professional IT Support for Oil Spill Exercises
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Beheerd.Events BV. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;