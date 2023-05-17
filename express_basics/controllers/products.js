const products = [];

exports.getAddProduct = (request, response ) => {
    response.render('add-product', {
        title: "Add New Product"
    });
}

exports.postProduct = (request, response) => {
    products.push({
        title: request.body.title
    });
    response.redirect('/shop/home');
}

exports.getHome = (request, response) => {
    // response.send("<html><head>Hello from Nodejs</head></html>");
    // response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    response.render('shop', {
        title: "All Products",
        prods: products
    });
}