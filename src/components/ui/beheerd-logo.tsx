import React from "react";
import logoImage from "@/assets/beheerd-logo.jpg";

interface BeheerdLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const BeheerdLogo: React.FC<BeheerdLogoProps> = ({ 
  className = "", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16"
  };

  return (
    <div className={`${className}`}>
      <img 
        src={logoImage}
        alt="Beheerd.Events Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default BeheerdLogo;