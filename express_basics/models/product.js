const products = [];

module.exports = class Product {

    constructor(title) {
        this.title = title;
    } // The constructor.

    save() {
        products.push(this);
    } // Class method to save the [Product] to the products list.

    static fetchProducts() {
        return products;
    } // Static method to get all the products.

} 