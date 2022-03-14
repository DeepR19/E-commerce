const mongoose = require("mongoose");

const cartSchema= new mongoose.Schema({
    title:{
        type: String,
        require: (true, "Please provide title of object")
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: "user"        
    },
    price:{
        type: Number,
        require: (true, "Please provide price of object")
    },
    color:{
        type: String,
        require: (true, "Please provide color of object")
    }
    
});

cartSchema.pre(/^find/,function(next){
    this.populate({
        path:"userId",
        select:"Fname email"
    });

    next();
})

const object = new mongoose.model("cart",cartSchema);

module.exports = object;