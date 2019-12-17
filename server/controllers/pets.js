console.log("pets.js is running");

const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {
    getAll(req, res){
        Pet.find({}).sort('type').exec()
            .then(all_pets => res.json(all_pets))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        let _id = req.params._id;
        Pet.findById(_id)
            .then(one_pet => res.json(one_pet))
            .catch(err => res.json(err));
    }
    create(req, res){
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({'msg': 'pet created'}))
            .catch(err => res.json(err));
    }
    update(req, res){
        let _id = req.params._id
        Pet.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then(() => res.json({"msg": "updated pet"}))
            .catch(err => res.json(err))
    }
    delete(req, res){
        // let _id = req.params._id
        // Pet.findByIdAndRemove(_id)
        //     .exec()
        //     .then(() => res.json({"msg": "deleted pet"}))
        //     .catch(err => res.json(err))
        Pet.findByIdAndRemove(req.params._id)
            .then(() => res.json({"msg": "deleted pet"}))
            .catch(err => res.json(err))
    }
}

module.exports = new PetController();