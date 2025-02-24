import React from "react";
import { LanguageProvider } from "./src/context/LanguageContext";

export const wrapPageElement = ({ element, props }) => {
  const lang = props?.pageContext?.locale || "en"; // Default to English if undefined
  console.warn("Locale from pageContext:", lang);

  return <LanguageProvider initialLang={lang}>{element}</LanguageProvider>;
};
