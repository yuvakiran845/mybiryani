import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@mybiryani.com",
      link: "mailto:hello@mybiryani.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Biryani Street, Food Court, Mumbai 400001",
      link: "#map",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Sun: 11 AM - 11 PM",
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | My Biryani - Order & Inquiries</title>
        <meta 
          name="description" 
          content="Contact My Biryani for orders, catering inquiries, or feedback. Call us at +91 98765 43210 or visit our restaurant in Mumbai." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Have a question or want to place a bulk order? We'd love to hear from you!
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-card"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-card"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        rows={5}
                        required
                        className="bg-card"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="bg-card border-border/50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <info.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground mb-1">{info.title}</p>
                              {info.link ? (
                                <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-muted-foreground text-sm">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <Card className="bg-accent text-accent-foreground">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-accent-foreground/10 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold mb-1">Quick Order via WhatsApp</p>
                          <p className="text-sm text-accent-foreground/80">
                            Send us your order directly on WhatsApp for faster service!
                          </p>
                        </div>
                        <a
                          href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20place%20an%20order"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                            Chat Now
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <div id="map" className="rounded-2xl overflow-hidden h-64 border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2!2d72.82!3d18.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzQ4LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="My Biryani Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
