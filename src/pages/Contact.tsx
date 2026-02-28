import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { companyInfo } from "@/lib/siteData";
import gsap from "gsap";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-block", { y: 40, opacity: 0, stagger: 0.2, duration: 0.7, ease: "power2.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.form.success"), description: t("contact.form.successDesc") });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("contact.heading1")} <span className="text-gradient">{t("contact.heading2")}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">{t("contact.sub")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="contact-block glass rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{t("contact.form.title")}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-ui text-sm text-muted-foreground mb-1 block">{t("contact.form.name")}</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder={t("contact.form.namePlaceholder")} className="bg-secondary/30 border-border/50" />
              </div>
              <div>
                <label className="font-ui text-sm text-muted-foreground mb-1 block">{t("contact.form.phone")}</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+251..." className="bg-secondary/30 border-border/50" />
              </div>
              <div>
                <label className="font-ui text-sm text-muted-foreground mb-1 block">{t("contact.form.email")}</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("contact.form.emailPlaceholder")} className="bg-secondary/30 border-border/50" />
              </div>
              <div>
                <label className="font-ui text-sm text-muted-foreground mb-1 block">{t("contact.form.message")}</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder={t("contact.form.messagePlaceholder")} rows={5} className="bg-secondary/30 border-border/50" />
              </div>
              <Button type="submit" className="w-full font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="w-4 h-4" />
                {t("contact.form.send")}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="contact-block glass rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{t("contact.details.title")}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui text-sm font-semibold text-foreground">{t("contact.details.address")}</h4>
                    <p className="font-body text-sm text-muted-foreground">{t("contact.details.addressValue")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui text-sm font-semibold text-foreground">{t("contact.details.phone")}</h4>
                    <a href={`tel:${companyInfo.phoneRaw}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">{companyInfo.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui text-sm font-semibold text-foreground">{t("contact.details.email")}</h4>
                    <a href={`mailto:${companyInfo.email}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">{companyInfo.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-block glass rounded-2xl overflow-hidden h-64">
              <iframe
                src={companyInfo.mapEmbedUrl}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Location - Bahir Dar, Ethiopia"
              />
            </div>

            <a href={`tel:${companyInfo.phoneRaw}`} className="block lg:hidden">
              <Button size="lg" className="w-full font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                <Phone className="w-5 h-5" />
                {t("nav.callNow")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
