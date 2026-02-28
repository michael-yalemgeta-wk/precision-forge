import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { companyInfo, navLinks } from "@/lib/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0">
            <Cog className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-foreground leading-tight">
              {t("nav.brandName")}
            </span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t("nav.brandSub")}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-ui text-sm px-4 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageToggle />
          <a href={`tel:${companyInfo.phoneRaw}`}>
            <Button size="sm" className="ml-2 font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-3.5 h-3.5" />
              {t("nav.callNow")}
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-strong mt-2 mx-4 rounded-lg p-4 animate-fade-in-up">
          <div className="flex justify-end mb-2">
            <LanguageToggle />
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block font-ui text-sm px-4 py-3 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <a href={`tel:${companyInfo.phoneRaw}`} className="block mt-2">
            <Button className="w-full font-ui gap-2 bg-primary text-primary-foreground">
              <Phone className="w-3.5 h-3.5" />
              {t("nav.callNow")}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
