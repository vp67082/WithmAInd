import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  image?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className = "", image }: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 flex justify-center">
          {image ? (
            <div className="w-full h-40 rounded-lg overflow-hidden mb-2">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
        <p className="text-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};