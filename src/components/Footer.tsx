import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Cog } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.products", path: "/products" },
    { key: "nav.gallery", path: "/gallery" },
    { key: "nav.contact", path: "/contact" },
  ];

  return (
    <footer className="glass-strong border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0">
                <Cog className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground leading-tight">
                  {t("nav.brandName")}
                </h3>
                <p className="font-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("nav.brandSub")}
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.contactUs")}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+251918353873"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +251 918 353 873
              </a>
              <a
                href="mailto:zenebetorno@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                zenebetorno@gmail.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                {t("contact.details.addressValue")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
