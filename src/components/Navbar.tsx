import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-display font-bold text-2xl">M</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground flex items-center gap-1">
                My Biryani
                <Sparkles className="w-4 h-4 text-gold" />
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Authentic Taste</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.path) 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/order" className="relative">
              <Button variant="ghost" size="icon" className="relative hover:bg-muted/50">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-secondary to-gold text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in shadow-md">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/order">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/order" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-secondary to-gold text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-medium transition-all rounded-lg mx-2 my-1 ${
                  isActive(link.path) 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/order" onClick={() => setIsOpen(false)} className="block px-2 mt-4">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold">
                Order Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;