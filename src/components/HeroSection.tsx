import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-pattern overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-medium text-foreground">
                Rated 4.9/5 by 10,000+ customers
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Authentic Biryani,{" "}
              <span className="text-gradient">Crafted with Passion</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience the royal taste of traditional Dum Biryani, slow-cooked to perfection 
              with hand-picked spices and the finest ingredients. Every bite tells a story of 
              centuries-old recipes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/order">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 gap-2">
                  Order Now
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
                  View Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { number: "15+", label: "Biryani Varieties" },
                { number: "50K+", label: "Happy Customers" },
                { number: "10+", label: "Years of Tradition" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800"
                alt="Delicious Biryani"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              {/* Steam Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-8 bg-gradient-to-t from-muted/50 to-transparent rounded-full animate-steam"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Natural</p>
                  <p className="text-sm text-muted-foreground">No preservatives</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dum Cooked</p>
                  <p className="text-sm text-muted-foreground">Traditional style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
