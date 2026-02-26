import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
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
                    <a href="tel:+251918353873" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">+251 918 353 873</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui text-sm font-semibold text-foreground">{t("contact.details.email")}</h4>
                    <a href="mailto:zenebetorno@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">zenebetorno@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-block glass rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62236.41338818462!2d37.3503!3d11.5936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164326430e405b39%3A0x5c4d0498e495cc6f!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Location - Bahir Dar, Ethiopia"
              />
            </div>

            <a href="tel:+251918353873" className="block lg:hidden">
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
