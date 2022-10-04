const PetController = require("../controllers/pet.controller");

//method types: get, post, put, delete 
module.exports = (app) =>{
    app.get("/api/pets", PetController.findAllPets );
    app.post("/api/pets", PetController.createNewPets );
    app.get("/api/pets/:id", PetController.findOnePet );
    app.put("/api/pets/:id", PetController.updateOnePet );
    app.delete("/api/pets/:id", PetController.deletePet );
}