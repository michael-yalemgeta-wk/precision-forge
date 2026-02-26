import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-md font-ui text-xs font-medium text-foreground hover:bg-secondary/50 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-primary" />
      {language === "en" ? "አማ" : "EN"}
    </button>
  );
};

export default LanguageToggle;
