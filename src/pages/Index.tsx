import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, Shield, Cog, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import gsap from "gsap";

const products = [
  { title: "Machine Spare Parts", desc: "High-precision replacement parts for industrial machinery", icon: Cog },
  { title: "Custom Shafts", desc: "Precision-engineered shafts for various applications", icon: Wrench },
  { title: "Bolts & Bushings", desc: "Durable fasteners and bushings to specification", icon: Shield },
  { title: "Custom Metal Parts", desc: "Bespoke fabrication from your drawings or samples", icon: Zap },
];

const whyUs = [
  { title: "Precision Engineering", desc: "Tight tolerances with expert lathe operation" },
  { title: "Quality Materials", desc: "Steel, aluminum, and alloy sourced for durability" },
  { title: "Custom Orders", desc: "We manufacture to your exact specifications" },
  { title: "Fast Turnaround", desc: "Efficient workflow to meet your deadlines" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-subtitle", { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.6, delay: 0.6, ease: "power3.out" });

      // Products stagger
      gsap.from(".product-card", {
        scrollTrigger: { trigger: productsRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });

      // Why us stagger
      gsap.from(".why-card", {
        scrollTrigger: { trigger: whyRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-8 md:p-16 max-w-4xl mx-auto glass-glow">
            <h1 className="hero-title font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Precision Metal{" "}
              <span className="text-gradient">Manufacturing</span>
              <br />
              in Bahir Dar
            </h1>
            <p className="hero-subtitle font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Expert lathe works, custom metal parts, and industrial manufacturing
              solutions. Built with precision. Delivered with reliability.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+251918353873">
                <Button size="lg" className="font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-ui gap-2 border-border text-foreground hover:bg-secondary/50 text-base px-8"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              What We <span className="text-gradient">Manufacture</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              From custom precision parts to industrial-scale production
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="product-card glass rounded-xl p-6 hover:glass-glow transition-shadow duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-ui text-base font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="ghost" className="font-ui gap-2 text-primary hover:text-primary hover:bg-primary/10">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-14">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Why Choose <span className="text-gradient">Us</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Trusted by businesses across Ethiopia for reliable metalwork
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className="why-card text-center p-6 rounded-xl bg-secondary/20 border border-border/30"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-ui text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Ready to start your project?
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Get in touch for a free consultation and quote.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+251918353873">
                <Button className="font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-4 h-4" />
                  +251 918 353 873
                </Button>
              </a>
              <a href="mailto:zenebetorno@gmail.com">
                <Button variant="outline" className="font-ui gap-2 border-border text-foreground hover:bg-secondary/50">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
