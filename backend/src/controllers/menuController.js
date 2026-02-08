const { menuItems } = require("../data/menuData");

const getMenu = (req, res) => {
  res.json(menuItems);
};

module.exports = { getMenu };
