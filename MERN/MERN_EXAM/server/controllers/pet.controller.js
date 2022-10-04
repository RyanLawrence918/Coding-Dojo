const Pet = require("../models/pet.models");


module.exports.findAllPets = (req, res)=>{
    Pet.find()
        .then(allPets =>{
            res.json({results: allPets})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.createNewPets = (req, res)=>{
    Pet.create(req.body)
        .then(newlyCreatedPet =>{
            res.json({results: newlyCreatedPet})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.findOnePet = (req, res)=>{
    Pet.findOne({_id: req.params.id})
        .then(pet =>{
            res.json({results: pet})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.updateOnePet = (req, res)=>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedPet =>{
            res.json({results: updatedPet})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.deletePet = (req, res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(pet =>{
            res.json({results: pet})
        })
        .catch(err=>{
            res.json(err)
        })
}