import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en";
import fr from "../locales/fr";

// Create context
const LanguageContext = createContext();

// Language provider
export const LanguageProvider = ({ children, initialLang = "en" }) => {
  const [language, setLanguage] = useState(initialLang);

  // Set translations based on current language
  const translations = { en, fr };
  const t = translations[language];

  // Change language and update URL
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("gatsbyLanguage", lang);
    const newPath = lang === "en" ? "/" : `/${lang}/`;
    window.history.pushState({}, "", newPath);
  };

  // Sync with localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("gatsbyLanguage");
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
