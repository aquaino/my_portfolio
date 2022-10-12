export default ({ app }, inject) => {
  let i18n = app.i18n;
  /* Function to translate project categories */
  const translateCategories = (categories) => {
    var res = [];
    categories.forEach((category) => {
      res.push(i18n.t(`store.categories.${category}`));
    });
    return res.join(", ");
  };
  // Inject $translateCategories(categories) in Vue and store
  inject("translateCategories", translateCategories);
};
