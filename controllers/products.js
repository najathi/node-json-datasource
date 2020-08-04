//const products = [];
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        docTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true,
    });
};

exports.postAddProduct = (req, res, next) => {
    //products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    //const products = products;
    /* const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true
	}); */

    Product.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            docTitle: "Shop",
            path: "/",
            hasProducts: products.length > 0,
            productCSS: true,
            activeShop: true,
        });
    });
};
