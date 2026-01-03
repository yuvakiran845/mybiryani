import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-pattern overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-scale" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-scale" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-gold/20 border border-secondary/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                4.9/5 from 10,000+ reviews
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              Authentic{" "}
              <span className="relative">
                <span className="text-gradient">Biryani</span>
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-gold animate-bounce-subtle" />
              </span>
              <br />
              <span className="text-primary">Crafted with Love</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience the royal taste of traditional{" "}
              <span className="text-foreground font-medium">Dum Biryani</span>, slow-cooked to perfection 
              with hand-picked spices and the finest ingredients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/order">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-lg px-8 h-14 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 glow-primary">
                  Order Now
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300">
                  View Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-6">
              {[
                { number: "15+", label: "Varieties", icon: "🍛" },
                { number: "50K+", label: "Happy Customers", icon: "❤️" },
                { number: "10+", label: "Years Legacy", icon: "👨‍🍳" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl group-hover:animate-bounce-subtle">{stat.icon}</span>
                    <p className="font-display text-3xl font-bold text-gradient">{stat.number}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right">
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border-2 border-dashed border-gold/20 rounded-full animate-spin-slow" />
            </div>
            
            {/* Main Image */}
            <div className="relative z-10 animate-float">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800"
                  alt="Delicious Biryani"
                  className="w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl ring-4 ring-gold/20"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-primary/20 via-transparent to-gold/10 pointer-events-none" />
              </div>
              
              {/* Enhanced Steam Effect */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-10 bg-gradient-to-t from-muted/60 to-transparent rounded-full animate-steam"
                    style={{ animationDelay: `${i * 0.4}s`, height: `${30 + i * 5}px` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Badge - Natural */}
            <div 
              className="absolute -bottom-2 -left-4 lg:-left-8 glass-card rounded-2xl p-4 shadow-xl animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">100% Natural</p>
                  <p className="text-sm text-muted-foreground">No preservatives</p>
                </div>
              </div>
            </div>

            {/* Floating Badge - Dum Cooked */}
            <div 
              className="absolute -top-2 -right-4 lg:-right-8 glass-card rounded-2xl p-4 shadow-xl animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-gold rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🔥</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Dum Cooked</p>
                  <p className="text-sm text-muted-foreground">Traditional style</p>
                </div>
              </div>
            </div>

            {/* New Badge - Fast Delivery */}
            <div 
              className="absolute bottom-1/4 -right-4 lg:-right-12 glass-card rounded-2xl p-3 shadow-xl animate-bounce-subtle"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <p className="font-semibold text-foreground text-sm">30 min delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;