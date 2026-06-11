const express = require("express");
const app = express();
const inventoryController = require("../controllers/inventoryShopController.js")
const routerInventoryShop = express.Router();


routerInventoryShop.get("/", inventoryController.productsControllerHome);
routerInventoryShop.get("/products/new", inventoryController.CreateProductGet);
routerInventoryShop.get("/products/:id/update", inventoryController.UpdateProductGet);
routerInventoryShop.get("/products/search", inventoryController.searchProductGet)
routerInventoryShop.post("/products/new", inventoryController.createProductController);
routerInventoryShop.post("/products/:id/update", inventoryController.updateProductPost)
routerInventoryShop.post("/products/:id/delete", inventoryController.deleteProductController);





module.exports = routerInventoryShop;


