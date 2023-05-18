const path = require("path"); // Import the path module.
const rootDir = require("../utils/path"); // Import the root dir util.
const fs = require("fs"); // Import the file system.

const requiredPath = path.join(rootDir, "data", "products.json");

const getFileContent = (callback) => {
  fs.readFile(requiredPath, (error, content) => {
    if (!error) {
      callback(JSON.parse(content));
      return;
    }
    callback([]);
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  } // The constructor.

  save() {
    getFileContent((products) => {
      products.push(this); // Add the new instance of [Product] into the file.
      fs.writeFile(requiredPath, JSON.stringify(products), (error) => {
        if (error === null) return;
        console.log("Error occured while writing file: " + error);
      });
    });
  } // Class method to save the [Product] to the products list.

  static fetchProducts(callback) {
    getFileContent(callback);
  } // Static method to get all the products.
};
