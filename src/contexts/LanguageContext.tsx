import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "am" ? "am" : "en") as Language;
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "en" ? "am" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string) => translations[language][key] ?? key,
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
