exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const languages = ["en", "fr"];

  languages.forEach((lang) => {
    createPage({
      path: lang === "en" ? "/" : `/${lang}/`, // "/" for English, "/fr/" for French
      component: require.resolve("./src/pages/index.js"),
      context: { locale: lang },
    });

    // Optionally, create an "/en/" route explicitly if desired
    if (lang === "en") {
      createPage({
        path: "/en/",
        component: require.resolve("./src/pages/index.js"),
        context: { locale: lang },
      });
    }
  });
};
