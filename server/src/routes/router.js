const bodyParser = require("body-parser");
const express=  require("express");
const router = express.Router();

const objectSchema= require('../model/objectSchema');
router.use(bodyParser.json());

router.route("/")
.get((req, res)=>{
    res.send("Done!!!")
})
.post( async (req, res)=>{
    try{
        const ack = await objectSchema.create(req.body);
        res.status(200).send(ack)
    }catch(err){
        res.status(400).send(err);
    }
})


module.exports =router;