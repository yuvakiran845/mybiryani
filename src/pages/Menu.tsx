import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { menuItems, menuCategories } from "@/data/menuData";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("chicken");

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Menu | My Biryani - Chicken, Mutton & Veg Biryani</title>
        <meta 
          name="description" 
          content="Explore our menu of authentic biryanis - Hyderabadi Chicken, Lucknowi Mutton, Vegetable Dum Biryani & more. Fresh starters, desserts & beverages." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Our Menu
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Explore our carefully crafted menu featuring authentic biryanis, delectable starters, 
                and refreshing beverages.
              </p>
            </div>
          </section>

          {/* Category Tabs */}
          <section className="sticky top-20 bg-background/95 backdrop-blur-md border-b border-border z-40">
            <div className="container mx-auto px-4">
              <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Menu Items */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <FoodCard item={item} />
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    No items found in this category.
                  </p>
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

export default Menu;
