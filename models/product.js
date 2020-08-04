const fs = require("fs");
const path = require("path");

//const products = [];

const p = path.join(
    path.dirname(process.mainModule.filename),
    "models",
    "data",
    "products.json"
);

const getProductsFormFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

// ES5 Constructor function
/* module.exports = function Product() {} */

// next gen.javascript
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        //products.push(this); // this refers exact object

        /* fs.readFile(p, (err, fileContent) => {
			let products = [];
			console.log(err);
			console.log(fileContent);
			if (!err) {
				products = JSON.parse(fileContent);
			}
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), err => {
				console.log(err);
			});
		}); */

        getProductsFormFile((products) => {
            // console.log("products", products);
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        //return products;

        /* const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
        }); */

        getProductsFormFile(cb);
    }
};
