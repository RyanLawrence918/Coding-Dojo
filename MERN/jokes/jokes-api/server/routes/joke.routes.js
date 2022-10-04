const JokeController = require("../controllers/joke.controller");

module.exports = (app)=>{
    app.get("/api", JokeController.helloWorld)
    app.get("/api/jokes", JokeController.showAllJokes)
    app.post("/api/jokes", JokeController.createJoke)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.put("/api/jokes/:id", JokeController.updateJokes)
    app.delete("/api/jokes/:id", JokeController.deleteJokes)
}