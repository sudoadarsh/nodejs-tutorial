const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
    getProductsFromFile(products => {
      // Check if the product already exists or not. 
      if (this.id) {
        let productToUpdate = products.findIndex((prod) => prod.id === this.id);
        products[productToUpdate] = this;
      } else {
        this.id = Math.random().toString();
        products.push(this);
      }
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log("Error while adding to product: "+ err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchProduct(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
};
