const Product = require("../models/product"); // Import the products model.

exports.getAddProduct = (request, response) => {
  response.render("add-product", {
    title: "Add New Product",
  });
};

exports.postProduct = (request, response) => {
  const product = new Product(request.body.title);
  product.save();

  response.redirect("/shop/home");
};

exports.getHome = (request, response) => {
  // response.send("<html><head>Hello from Nodejs</head></html>");
  // response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  const products = Product.fetchProducts((products)=> {
    response.render("shop", {
      title: "All Products",
      prods: products,
    });
  });

};
