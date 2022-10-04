//controller needs to be able to access the model for CRUD

const Joke = require("../models/joke.model");

module.exports.helloWorld = (req, res)=>{
    res.json({greeting:"hello mongoose"});
}

module.exports.showAllJokes = (req, res)=>{
    Joke.find()
        .then(foundJokes=>{
            res.json({results: foundJokes})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createJoke = (req, res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id:req.params.id})
        .then((foundJoke)=>{
            res.json({results: foundJoke })
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateJokes= (req, res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body, 
        {new:true, runValidators:true}
    )
    .then(updatedJoke =>
        res.json({results: updatedJoke}))
    .catch(err=>{
        res.json({message: "Something went wrong", error:err})
    })
}

module.exports.deleteJokes = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJokes =>{
        res.json({results: deletedJokes})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error:err})
    })
}