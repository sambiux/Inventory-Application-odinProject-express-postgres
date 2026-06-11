const express = require("express");
const app = express();
const path= require("node:path")
const inventoryRouter = require("./routes/inventoryShopRouter.js")
const dotenv = require("dotenv");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", inventoryRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta corrinedo en el puerto ${PORT}`);
})