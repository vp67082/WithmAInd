import { Network } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <Network className="h-8 w-8 text-primary animate-float" />
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"></div>
      </div>
      {showText && (
        <span className="text-2xl font-bold text-foreground">
          FutureFlow
        </span>
      )}
    </div>
  );
};