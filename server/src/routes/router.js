const bodyParser = require("body-parser");
const express=  require("express");
const router = express.Router();
const auth = require('../middleware/auth')

const objectSchema= require('../model/objectSchema');
const userSchema= require('../model/userSchema');
const cartSchema= require('../model/cartSchema');




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
.get(auth, async(req, res)=>{
    try {
        const data = await cartSchema.find({userId: req.userID})

        res.status(200).json(data);

    } catch (error) {
        console.log(error)
    }
})
.post(auth, async(req, res)=>{
    try{
        if(!req.body.userId) {
            req.body.userId = req.userID
        }

        const ack = await cartSchema.create(req.body);
        res.status(200).send(ack);
    }catch(err){
        res.status(400).send(err);
    }
})
.delete(auth, async(req, res)=>{
    try{
        const ack = await cartSchema.findByIdAndDelete(req.body.id);
        res.status(200).send(ack)
    }catch(err){
        res.status(400).send(err);
    }
})



router.route('/deleteCart')
.delete(async (req, res)=>{
    try {
        const data = await cartSchema.remove({});
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
})

module.exports =router;