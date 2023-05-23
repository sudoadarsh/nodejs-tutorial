const product = []; // The product list.

const getProductList = (request, response) => {
    response.render('shop/product-list', {
        "title": "PRODUCTS LIST",
        "stylePath": ""
    });
}

const getAddProduct = (request, response) => {
    response.render('admin/add-product', {
        "title": "ADD PRODUCTS",
        "stylePath": ""
    });
}

const postAddProduct = (request, response) => {
    product.push(request.body.title)
    response.redirect(endpoints.homeAllProducts);
}

module.exports = {
    "getProductList": getProductList,
    "getAddProduct": getAddProduct,
    "postAddProduct": postAddProduct
}
