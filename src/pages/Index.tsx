import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Link, 
  Clock, 
  Mail, 
  MessageSquare, 
  Share2, 
  FileText, 
  Bot,
  Mic,
  Zap
} from "lucide-react";

// Import images
import prozesseSteuernImg from "@/assets/prozesse-steuern.jpg";
import workflowsVerbindenImg from "@/assets/workflows-verbinden.jpg";
import mehrZeitGewinnenImg from "@/assets/mehr-zeit-gewinnen.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Settings,
      title: "Prozesse steuern.",
      description: "Automatisiere deine Leadgenerierung, Follow-ups oder Terminbuchung – unabhängig von technischer Erfahrung.",
      image: prozesseSteuernImg
    },
    {
      icon: Link,
      title: "Workflows verbinden.",
      description: "Integriere Tools wie Notion, Google Sheets, Slack oder Stripe nahtlos in deinen Arbeitsalltag.",
      image: workflowsVerbindenImg
    },
    {
      icon: Clock,
      title: "Mehr Zeit gewinnen.",
      description: "Lass repetitive Aufgaben mit Micro-Apps, Fahrtenbuch-Tools oder Telegram-Bots smart abnehmen.",
      image: mehrZeitGewinnenImg
    }
  ];

  const automationOptions = [
    {
      icon: Mail,
      title: "E-Mail-Workflows",
      description: "Automatische E-Mail-Sequenzen, Terminbuchungen und Erinnerungen"
    },
    {
      icon: Share2,
      title: "Social-Media-Autoposting",
      description: "Redaktionsplan mit automatischer Veröffentlichung auf allen Kanälen"
    },
    {
      icon: FileText,
      title: "Rechnungs- und Belegerstellung",
      description: "Perfekt für Coaches, Berater und Online-Verkäufer"
    },
    {
      icon: Bot,
      title: "Telegram-Bots",
      description: "Automatische Auslieferung von Büchern, Checklisten oder digitalen Produkten"
    },
    {
      icon: Zap,
      title: "AI-gestützte Assistenten",
      description: "Intelligente Kategorisierung und Prozesssteuerung"
    },
    {
      icon: Mic,
      title: "Fahrtenbuch-Erfassung",
      description: "Per Spracheingabe oder automatisierter Formulare"
    }
  ];

  const testimonials = [
    {
      text: "Dank der Automatisierung spare ich jede Woche mehrere Stunden – ohne technische Vorkenntnisse!",
      name: "Sara M., Design Agentur"
    },
    {
      text: "Die Umsetzung war schnell, professionell und genau auf mein Business abgestimmt.",
      name: "Thomas K., Coach"
    },
    {
      text: "Mein Content wird jetzt automatisch gepostet – das bringt echte Erleichterung.",
      name: "Lisa R., Online Marketing"
    },
    {
      text: "Ich wusste nicht, dass Automatisierung so intuitiv und menschlich sein kann.",
      name: "Michael B., Berater"
    },
    {
      text: "Jede Empfehlung wurde verständlich erklärt und individuell auf mich angepasst.",
      name: "Anna S., E-Commerce"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automatisierung.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Neu gedacht.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Effizient, intuitiv, menschlich.
            </p>
            <p className="text-lg text-primary mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Für Selbstständige, Coaches & Unternehmen, die ihre Zeit zurückholen wollen. 
              Für smarte Prozesse, klare Systeme und mehr Leichtigkeit im Alltag.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Wir helfen Unternehmen, ihre Prozesse smart, effizient und zukunftssicher 
              zu gestalten – mit durchdachter Automatisierung, AI-gestützten Workflows 
              und individueller technischer Beratung.
            </p>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg px-8 py-4 shadow-glow"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* Core Competency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Kernkompetenzen
          </h2>
          <p className="text-lg text-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Unsere Kernkompetenz liegt in der Arbeit mit{" "}
            <span className="font-semibold text-primary">n8n</span> – einem flexiblen 
            Open-Source-Automationstool – sowie der Entwicklung intelligenter Tools und 
            Micro-Apps zur täglichen Entlastung.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="leistungen" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Options Section */}
      <section id="automatisierung" className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Was Sie mit uns automatisieren können
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Von einfachen E-Mail-Workflows bis hin zu komplexen AI-Assistenten – 
              wir finden die passende Lösung für Ihr Business.
            </p>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg px-8 py-4 shadow-glow"
            >
              Kostenlose Beratung
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationOptions.map((option, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...option} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="kundenstimmen" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Echte Erfahrungen von echten Menschen, die ihre Prozesse 
              erfolgreich automatisiert haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard text={testimonial.text} author={testimonial.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kontakt</h3>
              <p className="text-muted-foreground">E-Mail: info@futureflow.ch</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="hover:text-foreground transition-colors"
              >
                Kontakt
              </button>
              <span className="hidden sm:inline">•</span>
              <a href="#impressum" className="hover:text-foreground transition-colors">
                Impressum
              </a>
              <span className="hidden sm:inline">•</span>
              <span>© 2024 FutureFlow. Schweiz.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
