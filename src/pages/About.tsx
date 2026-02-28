import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutCapabilities } from "@/lib/siteData";
import gsap from "gsap";

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("about.heading1")} <span className="text-gradient">{t("about.heading2")}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">{t("about.sub")}</p>
        </div>

        <div className="about-card glass rounded-2xl p-8 md:p-12 mb-10 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("about.story.title")}</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">{t("about.story.p1")}</p>
          <p className="font-body text-muted-foreground leading-relaxed">{t("about.story.p2")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="about-card glass rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{t("about.mission.title")}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("about.mission.desc")}</p>
          </div>
          <div className="about-card glass rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{t("about.vision.title")}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("about.vision.desc")}</p>
          </div>
        </div>

        <div className="about-card glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">{t("about.capabilities.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutCapabilities.map((item) => (
              <div key={item.titleKey} className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-ui text-sm font-semibold text-foreground mb-1">{t(item.titleKey)}</h4>
                  <p className="font-body text-xs text-muted-foreground">{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
