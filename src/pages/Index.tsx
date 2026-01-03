import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>My Biryani | Authentic Hyderabadi Biryani Delivery</title>
        <meta 
          name="description" 
          content="Order authentic Hyderabadi Biryani online. Dum-cooked to perfection with premium spices. Chicken, Mutton & Veg options. Fast delivery across the city." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <SpecialOfferBanner />
          <FeaturedSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
