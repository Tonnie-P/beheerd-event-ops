import React from "react";

interface BeheerdLogoProps {
  className?: string;
  variant?: "light" | "dark"; // For different backgrounds
  size?: "sm" | "md" | "lg";
}

const BeheerdLogo: React.FC<BeheerdLogoProps> = ({ 
  className = "", 
  variant = "light",
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8", 
    lg: "h-12"
  };

  const textColor = variant === "light" ? "text-foreground" : "text-white";

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Green ON Power Button Icon */}
      <div className={sizeClasses[size]}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle background */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            stroke="#89D248" 
            strokeWidth="10"
            fill="none"
          />
          {/* Vertical line (power symbol) */}
          <line 
            x1="50" 
            y1="20" 
            x2="50" 
            y2="55" 
            stroke="#89D248" 
            strokeWidth="10" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* BEHEERD.EVENTS Text */}
      <span className={`font-black tracking-widest ${textColor} ${
        size === "sm" ? "text-lg" : 
        size === "md" ? "text-xl" : 
        "text-3xl"
      }`}>
        BEHEERD.EVENTS
      </span>
    </div>
  );
};

export default BeheerdLogo;