const mongoose = require("mongoose");

const reviewSchema= new mongoose.Schema({
    item:{
        type: mongoose.Schema.ObjectId,
        ref: "objects"        
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "user"        
    },
    comment:[
        {
            type: String,
            require: true
        }
    ],
    date:{
        type: Date,
        default: Date.now()
    }
    
});

cartSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"email Fname"
    }).populate({
        path:"item",
        select: "title"
    });

    next();
})

const object = new mongoose.model("cart",reviewSchema);

module.exports = object;