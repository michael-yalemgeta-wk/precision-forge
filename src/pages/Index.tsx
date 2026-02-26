import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, Shield, Cog, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";

const productIcons = [Cog, Wrench, Shield, Zap];

const Index = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const products = [
    { titleKey: "home.product1.title", descKey: "home.product1.desc", icon: productIcons[0] },
    { titleKey: "home.product2.title", descKey: "home.product2.desc", icon: productIcons[1] },
    { titleKey: "home.product3.title", descKey: "home.product3.desc", icon: productIcons[2] },
    { titleKey: "home.product4.title", descKey: "home.product4.desc", icon: productIcons[3] },
  ];

  const whyUs = [
    { titleKey: "home.why1.title", descKey: "home.why1.desc" },
    { titleKey: "home.why2.title", descKey: "home.why2.desc" },
    { titleKey: "home.why3.title", descKey: "home.why3.desc" },
    { titleKey: "home.why4.title", descKey: "home.why4.desc" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-subtitle", { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.6, delay: 0.6, ease: "power3.out" });

      gsap.from(".product-card", {
        scrollTrigger: { trigger: productsRef.current, start: "top 80%" },
        y: 50, opacity: 0, stagger: 0.15, duration: 0.7, ease: "power2.out",
      });

      gsap.from(".why-card", {
        scrollTrigger: { trigger: whyRef.current, start: "top 80%" },
        y: 40, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-8 md:p-16 max-w-4xl mx-auto glass-glow">
            <h1 className="hero-title font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              {t("hero.title1")}{" "}
              <span className="text-gradient">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </h1>
            <p className="hero-subtitle font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+251918353873">
                <Button size="lg" className="font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  <Phone className="w-4 h-4" />
                  {t("hero.callNow")}
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="font-ui gap-2 border-border text-foreground hover:bg-secondary/50 text-base px-8">
                  <Mail className="w-4 h-4" />
                  {t("hero.contactUs")}
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
              {t("home.products.heading1")} <span className="text-gradient">{t("home.products.heading2")}</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">{t("home.products.sub")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.titleKey} className="product-card glass rounded-xl p-6 hover:glass-glow transition-shadow duration-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-ui text-base font-semibold text-foreground mb-2">{t(product.titleKey)}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{t(product.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="ghost" className="font-ui gap-2 text-primary hover:text-primary hover:bg-primary/10">
                {t("home.products.viewAll")}
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
                {t("home.why.heading1")} <span className="text-gradient">{t("home.why.heading2")}</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">{t("home.why.sub")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={item.titleKey} className="why-card text-center p-6 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-ui text-sm font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                  <p className="font-body text-xs text-muted-foreground">{t(item.descKey)}</p>
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
              <h3 className="font-heading text-xl font-bold text-foreground">{t("home.cta.heading")}</h3>
              <p className="font-body text-sm text-muted-foreground">{t("home.cta.sub")}</p>
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
                  {t("hero.contactUs")}
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
