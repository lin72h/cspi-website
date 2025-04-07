"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("zh");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load saved language preference or default to Chinese
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Load translations
    import("@/translations").then((module) => {
      setTranslations(module.default);
    });
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language);
    }
  }, [language, isClient]);

  // Translation function
  const t = (key: string, section = "common"): string => {
    if (!translations[section] || !translations[section][language]) {
      return key;
    }
    return translations[section][language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}; 