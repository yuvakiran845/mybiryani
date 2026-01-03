import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FoodCard from "./FoodCard";
import { menuItems } from "@/data/menuData";

const FeaturedSection = () => {
  const featuredItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Specialties
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Most Loved Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our customers' favorites - each dish crafted with love and the finest ingredients, 
            bringing the authentic taste of India to your table.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FoodCard item={item} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/menu">
            <Button size="lg" variant="outline" className="gap-2 text-lg">
              Explore Full Menu
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
