const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editMode: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect('/');
  }

  Product.fetchProduct(req.params.productID, prod => {
    if (!prod) {
      res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      editMode: editMode,
      product: prod
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  // Get the product ID. 
  const updatedProduct = new Product(
    req.body.productID,
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  updatedProduct.save();

  // Redirect to products page. 
  res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
