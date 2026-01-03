import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [deliveryType, setDeliveryType] = useState("delivery");

  const deliveryCharge = deliveryType === "delivery" ? 50 : 0;
  const finalTotal = totalPrice + deliveryCharge;

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart first!",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Order placed successfully!",
      description: "Your delicious biryani is being prepared. You'll receive a confirmation shortly.",
    });
    clearCart();
  };

  return (
    <>
      <Helmet>
        <title>Order Online | My Biryani - Fast Delivery</title>
        <meta 
          name="description" 
          content="Order authentic biryani online for delivery or takeaway. Fast delivery, fresh preparation, and easy checkout." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-primary py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                Your Order
              </h1>
              <p className="text-primary-foreground/80">
                Review your cart and proceed to checkout
              </p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              {items.length === 0 ? (
                /* Empty Cart */
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Your cart is empty
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Looks like you haven't added anything yet. Let's fix that!
                  </p>
                  <Link to="/menu">
                    <Button size="lg" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Browse Menu
                    </Button>
                  </Link>
                </div>
              ) : (
                /* Cart with Items */
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-xl font-bold text-foreground">
                        Cart Items ({items.length})
                      </h2>
                      <Link to="/menu" className="text-primary hover:underline text-sm font-medium">
                        + Add more items
                      </Link>
                    </div>

                    {items.map((item) => (
                      <Card key={item.id} className="bg-card border-border/50">
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                              <p className="text-primary font-bold">₹{item.price}</p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                              
                              <div className="flex items-center gap-3 bg-muted rounded-full p-1">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-background/80 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-6 text-center font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-background/80 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="lg:col-span-1">
                    <Card className="bg-card border-border/50 sticky top-28">
                      <CardContent className="p-6 space-y-6">
                        <h2 className="font-display text-xl font-bold text-foreground">
                          Order Summary
                        </h2>

                        {/* Delivery Type */}
                        <div>
                          <Label className="text-sm font-medium text-foreground mb-3 block">
                            Delivery Type
                          </Label>
                          <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                              <RadioGroupItem value="delivery" id="delivery" />
                              <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                                <span className="font-medium">Home Delivery</span>
                                <span className="text-muted-foreground text-sm block">30-45 mins • ₹50</span>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                              <RadioGroupItem value="takeaway" id="takeaway" />
                              <Label htmlFor="takeaway" className="flex-1 cursor-pointer">
                                <span className="font-medium">Takeaway</span>
                                <span className="text-muted-foreground text-sm block">Pick up in 20 mins • Free</span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Coupon */}
                        <div>
                          <Label className="text-sm font-medium text-foreground mb-2 block">
                            Promo Code
                          </Label>
                          <div className="flex gap-2">
                            <Input placeholder="Enter code" className="bg-background" />
                            <Button variant="outline">Apply</Button>
                          </div>
                        </div>

                        {/* Totals */}
                        <div className="space-y-3 pt-4 border-t border-border">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="text-foreground">₹{totalPrice}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Delivery</span>
                            <span className="text-foreground">
                              {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
                            </span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                            <span>Total</span>
                            <span className="text-primary">₹{finalTotal}</span>
                          </div>
                        </div>

                        <Button
                          onClick={handleCheckout}
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-lg"
                        >
                          Place Order
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By placing your order, you agree to our Terms & Conditions
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Order;
