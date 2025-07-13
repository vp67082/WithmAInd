import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  className?: string;
  author?: string;
}

export const TestimonialCard = ({ text, className = "", author }: TestimonialCardProps) => {
  const initials = author ? author.split(' ').map(n => n[0]).join('').substring(0, 2) : 'K';
  
  return (
    <Card className={`bg-secondary/50 border-border/30 hover:bg-secondary/70 transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-primary mb-4 opacity-60" />
        <p className="text-foreground leading-relaxed italic mb-4">"{text}"</p>
        {author && (
          <div className="flex items-center space-x-3 pt-4 border-t border-border/30">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-xs">{initials}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{author}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};