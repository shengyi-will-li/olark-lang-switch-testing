import React from "react";
import { useLanguage } from "../context/LanguageContext";

const IndexPage = () => {
  const { t, language, changeLanguage } = useLanguage();

  if (window.olark && typeof window.olark === "function") {
    if (language === "fr") {
      window.olark("api.chat.setOperatorGroup", {
        group: process.env.GATSBY_OLARK_GROUP_FRENCH,
      });
      window.olark("api.box.setLocale", "fr-FR");
      window.olark.configure("system.localization", "fr-FR");
      window.olark.configure("locale.unavailable_title", "Besoin d'aide?");
      window.olark.configure(
        "locale.away_message",
        "Nous ne sommes pas disponibles pour l&rsquo;instant! Toutefois, vous pouvez consulter notre <a href='https://www.sunwingcares.ca/hc/fr/articles/360000257453' target='_blank'>FAQs</a> pour de l&rsquo;assistance immédiate ou contacter l&rsquo;un de nos Spécialistes en voyage au 1-877-786-9464! Nos Spécialistes sont disponibles du lundi au vendredi, de 8h à 22h HNE, samedi et dimanche de 8h à 20h HNE."
      );
    } else {
      window.olark("api.chat.setOperatorGroup", {
        group: process.env.GATSBY_OLARK_GROUP_ENGLISH,
      });
      window.olark("api.box.setLocale", "en-US");
      window.olark.configure("system.localization", "en-US");
      window.olark.configure("locale.unavailable_title", "Need help(Test)?");
    }
    window.olark("api.chat.onOperatorsAvailable", () => {
      window.olark("api.box.show");
    });
  }

  console.warn("pagelanguage", language);
  return (
    <main>
      <h1>{t.welcome}</h1>
      <p>{t.about}</p>

      <div>
        <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
        <button onClick={() => changeLanguage("fr")}>🇫🇷 French</button>
      </div>

      <p>Current Language: {language.toUpperCase()}</p>
    </main>
  );
};

export default IndexPage;
