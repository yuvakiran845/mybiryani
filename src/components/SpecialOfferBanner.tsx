import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SpecialOfferBanner = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">Limited Time Offer</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Weekend Special: 20% Off
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Use code <span className="font-bold text-secondary">WEEKEND20</span> on orders above ₹500
            </p>
          </div>

          <Link to="/order">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 h-14"
            >
              Order Now & Save
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
