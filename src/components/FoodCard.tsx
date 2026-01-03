import { Plus, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { MenuItem } from "@/data/menuData";
import { useToast } from "@/hooks/use-toast";

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3 h-3 ${i <= level ? "text-destructive" : "text-muted"}`}
          fill={i <= level ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  return (
    <Card className="group overflow-hidden hover-lift bg-card border-border/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isVeg ? (
            <Badge className="bg-accent text-accent-foreground">Veg</Badge>
          ) : (
            <Badge className="bg-primary text-primary-foreground">Non-Veg</Badge>
          )}
          {item.isPopular && (
            <Badge className="bg-secondary text-secondary-foreground">Popular</Badge>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-background/95 backdrop-blur-sm text-foreground font-bold px-3 py-1.5 rounded-full text-lg">
            ₹{item.price}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
            {item.name}
          </h3>
          {item.spiceLevel && <SpiceIndicator level={item.spiceLevel} />}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
