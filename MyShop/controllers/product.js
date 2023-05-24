const products = []; // The product list.
const endpoints = require("../utils/endpoints"); // The endpoints util.

const getProductList = (request, response) => {
  response.render("shop/product-list", {
    title: "PRODUCTS LIST",
    products: products
  });
};

const getAddProduct = (request, response) => {
  response.render("admin/add-product", {
    title: "ADD PRODUCTS",
  });
};

const postAddProduct = (request, response) => {
  products.push(request.body);
  response.redirect(endpoints.homeAllProducts);
};

module.exports = {
  getProductList: getProductList,
  getAddProduct: getAddProduct,
  postAddProduct: postAddProduct,
};
