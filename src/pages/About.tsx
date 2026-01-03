import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Heart, Leaf, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description: "Every biryani is crafted with love, following recipes passed down through generations.",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the finest basmati rice, premium meats, and hand-picked spices daily.",
    },
    {
      icon: Award,
      title: "Authentic Recipes",
      description: "Our recipes stay true to traditional Hyderabadi and Lucknowi cooking methods.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We treat every order like we're cooking for family.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | My Biryani - Our Story & Tradition</title>
        <meta 
          name="description" 
          content="Discover the story of My Biryani - 10+ years of crafting authentic Hyderabadi biryani with traditional dum cooking and premium spices." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Our Story
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                A journey of passion, tradition, and the pursuit of the perfect biryani.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
                    alt="Traditional Biryani Cooking"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                    <p className="font-display text-4xl font-bold">10+</p>
                    <p className="text-sm">Years of Excellence</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                    Since 2014
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Where Tradition Meets Taste
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My Biryani was born from a simple dream - to bring the authentic taste of 
                      Hyderabadi biryani to every home. Our founder, inspired by his grandmother's 
                      recipes, started this journey in a small kitchen with just one copper handi 
                      and a passion for perfection.
                    </p>
                    <p>
                      Today, we've served over 50,000 happy customers, but our commitment remains 
                      unchanged. Every biryani is still prepared using the traditional 'Dum' method 
                      - slow-cooked over charcoal, sealed with dough, allowing the flavors to 
                      develop naturally.
                    </p>
                    <p>
                      We believe that great biryani is not just about ingredients - it's about 
                      patience, precision, and an unwavering dedication to quality. That's why 
                      we hand-select our aged basmati rice, source our spices directly from Kerala, 
                      and use only the freshest meats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  What We Stand For
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                  Our Values
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-2xl border border-border/50 text-center hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  The Art of Biryani
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                  Our Cooking Process
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Premium Selection",
                    description: "We start with the finest aged basmati rice, fresh meats, and aromatic spices sourced from trusted suppliers.",
                    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
                  },
                  {
                    step: "02",
                    title: "Marination Magic",
                    description: "Our meats are marinated overnight with yogurt, ginger-garlic, and a secret blend of 24 spices.",
                    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
                  },
                  {
                    step: "03",
                    title: "Dum Perfection",
                    description: "Slow-cooked in sealed copper handis over low heat, allowing every grain to absorb the rich flavors.",
                    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
