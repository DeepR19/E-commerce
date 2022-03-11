const bodyParser = require("body-parser");
const express=  require("express");
const router = express.Router();

const objectSchema= require('../model/objectSchema');
const userSchema= require('../model/userSchema');

// router.use(bodyParser.json());

router.route("/data")
.get(async(req, res)=>{
    try{
        const data = await objectSchema.find();
        res.status(200).json({
            data
        });
    }catch(err){
        res.status(400).send(err);
    }
})
.post( async (req, res)=>{
    try{
        const ack = await objectSchema.create(req.body);
        res.status(200).send(ack)
    }catch(err){
        res.status(400).send(err);
    }
});




router.route("/product/:id")
.get(async(req, res)=>{
    try{
        const _id = req.params.id;
        const data = await objectSchema.findById(_id);
        res.status(200).json({
            data
        });
    }catch(err){
        res.status(400).send(err);
    }
})

router.route("/addToCart")
.get(async(req, res)=>{
    try {
        const data = await userSchema.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
})
.post(async(req, res)=>{
    try{
        console.log(req.body);
        const ack = await userSchema.create(req.body.object);
        res.status(200).send(ack)
    }catch(err){
        res.status(400).send(err);
    }
})
.delete(async(req, res)=>{
    try{
        console.log(req.body.id);
        const ack = await userSchema.findByIdAndDelete(req.body.id);
        res.status(200).send(ack)
    }catch(err){
        res.status(400).send(err);
    }
})


module.exports =router;