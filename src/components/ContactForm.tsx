import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns bald bei Ihnen.",
    });
    
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="shadow-elegant border-border/50">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl text-foreground">Kostenlose Erstberatung anfragen</CardTitle>
        <p className="text-muted-foreground">Lassen Sie uns über Ihre Automatisierungsmöglichkeiten sprechen</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required className="border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input id="email" name="email" type="email" required className="border-border/50" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="support">Wobei brauchen Sie Unterstützung?</Label>
            <Select name="support">
              <SelectTrigger className="border-border/50">
                <SelectValue placeholder="Bitte wählen Sie..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automation">Prozess-Automatisierung</SelectItem>
                <SelectItem value="email">E-Mail-Workflows</SelectItem>
                <SelectItem value="social">Social Media Automation</SelectItem>
                <SelectItem value="invoicing">Rechnungsstellung</SelectItem>
                <SelectItem value="telegram">Telegram-Bots</SelectItem>
                <SelectItem value="ai">AI-Assistenten</SelectItem>
                <SelectItem value="other">Sonstiges</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Nachricht</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Erzählen Sie uns mehr über Ihr Projekt..."
              className="min-h-[100px] border-border/50"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
            disabled={isLoading}
          >
            {isLoading ? (
              "Wird gesendet..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Kostenlose Beratung anfragen
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};