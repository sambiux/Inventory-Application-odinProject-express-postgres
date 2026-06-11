const db = require("../db/queries");

const links = [
    {
        href: "/",
        text: "Inicio"
    },
    {
        href: "/products/new",
        text: "Nueva Equipación"
    }
]


async function productsControllerHome(req, res){
  const products = await db.getAllProducts() ;
  console.log(products);
  
    res.render("index",{
      products: products,
      links: links
    })
}
async function CreateProductGet(req,res){
    res.render("newProduct")
}

async function searchProductGet(req, res){
    const {query} = req.query;
    if (!query) {
    return res.render("searchProducts", {
        productosFiltrado: []
    });
}
    const productosFiltrado= await db.searchProductGet(`%${query}%`)
    res.render("searchProducts", {
        productosFiltrado: productosFiltrado
    })
}
async function UpdateProductGet(req, res){
    const product = req.params;
    console.log(product);
    
    res.render("updateProduct",{
        product: product
    });
}

async function createProductController(req, res){
    const {nombre, precio, category_id} = req.body;
    await db.createProductPost(nombre, precio, category_id);
    res.redirect("/")
}

async function updateProductPost(req, res){
    const {nombre, precio} = req.body;
    const {id} = req.params
    await db.updateProductPost(nombre, precio, id);
    res.redirect("/")
}

async function deleteProductController(req, res){
    const {id} = req.params;
    await db.deleteProductPost(id)
    res.redirect("/")
}

module.exports = {
    productsControllerHome,
    CreateProductGet,
    UpdateProductGet,
    searchProductGet,
    updateProductPost,
    createProductController,
    deleteProductController
}