const ProductController = require("../controllers/product.controller");

//method types: get, post, put, delete 
module.exports = app =>{
    app.get("/api/products", ProductController.findAllProducts );
    app.post("/api/products", ProductController.createNewProduct );
    app.get("/api/products/:id", ProductController.findOneProduct );
    app.put("/api/products/:id", ProductController.updateOneProduct );
    app.delete("/api/products/:id", ProductController.deleteProduct );
}