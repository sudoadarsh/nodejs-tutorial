const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "cart.json"); // The cart.json file.

module.exports = class Cart {
  static addProduct(id, price) {
    // Get products from the cart file.
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        // The file exists.
        cart = JSON.parse(fileContent);
      }

      // Check if the product already exists.
      const index = cart.products.findIndex(prod => prod.id === id);
      const existingProduct = cart.products[index];

      let updatedProduct;

      if (existingProduct) {
        // The product exists => increase it's qty.
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products[index] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products.push(updatedProduct);
      }

      cart.totalPrice = cart.totalPrice + +price;

      // Write the data. 
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log("Error while adding to cart: " + err);
      });
    });
  }
};
