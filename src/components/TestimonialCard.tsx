import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  className?: string;
}

export const TestimonialCard = ({ text, className = "" }: TestimonialCardProps) => {
  return (
    <Card className={`bg-secondary/50 border-border/30 hover:bg-secondary/70 transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-primary mb-4 opacity-60" />
        <p className="text-foreground leading-relaxed italic">"{text}"</p>
      </CardContent>
    </Card>
  );
};