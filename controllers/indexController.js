function getHomePage(req, res) {
  res.render("index", { title: "Inventory Management System" });
}
module.exports = {
  getHomePage,
};
