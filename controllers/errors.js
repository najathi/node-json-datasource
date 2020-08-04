exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    path: "",
    docTitle: "Page Not Found"
  });
};
