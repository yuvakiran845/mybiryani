import { Plus, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { MenuItem } from "@/data/menuData";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart! 🎉",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3.5 h-3.5 transition-colors ${i <= level ? "text-destructive" : "text-muted/50"}`}
          fill={i <= level ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  return (
    <Card className="group overflow-hidden hover-lift glass-card border-0 ring-1 ring-border/50 hover:ring-primary/30 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isLiked ? "text-destructive fill-destructive" : "text-muted-foreground"}`} 
          />
        </button>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isVeg ? (
            <Badge className="bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 shadow-md">
              <span className="mr-1">🌱</span> Veg
            </Badge>
          ) : (
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground border-0 shadow-md">
              Non-Veg
            </Badge>
          )}
          {item.isPopular && (
            <Badge className="bg-gradient-to-r from-secondary to-gold text-secondary-foreground border-0 shadow-md animate-pulse-scale">
              🔥 Popular
            </Badge>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-background/95 backdrop-blur-md text-foreground font-bold px-4 py-2 rounded-full text-lg shadow-lg ring-1 ring-border/50">
            ₹{item.price}
          </span>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display font-semibold text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          {item.spiceLevel && <SpiceIndicator level={item.spiceLevel} />}
        </div>
        
        <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground gap-2 h-11 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;