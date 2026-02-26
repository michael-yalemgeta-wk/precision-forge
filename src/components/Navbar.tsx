import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="flex flex-col">
          <span className="font-heading text-lg font-bold text-foreground leading-tight">
            Zenebe Tesfaye Torino
          </span>
          <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            & Ye Gabior Inbox Enterprise
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-ui text-sm px-4 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+251918353873">
            <Button size="sm" className="ml-4 font-ui gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-3.5 h-3.5" />
              Call Now
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block font-ui text-sm px-4 py-3 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+251918353873" className="block mt-2">
            <Button className="w-full font-ui gap-2 bg-primary text-primary-foreground">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
