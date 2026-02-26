import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-strong border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Zenebe Tesfaye Torino
            </h3>
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              & Ye Gabior Inbox Enterprise Manufacturing
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Precision metal manufacturing and custom lathe works in Bahir Dar, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products & Services", path: "/products" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact Us
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
                Bahir Dar, Amhara, Ethiopia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zenebe Tesfaye Torino & Ye Gabior Inbox Enterprise Manufacturing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
