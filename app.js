const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// console.log(
//     "path.dirname(process.mainModule.filename)",
//     path.dirname(process.mainModule.filename)
// ); // E:\Practicals\NodeJs\shopping-app-mvc

// install EJS (EJS - Extended version of pug)
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");

// make accessible public path
app.use(express.static(path.join(__dirname, "public")));

// bodyParser config
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(errorsController.get404);

app.listen(3000);
