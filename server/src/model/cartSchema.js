const mongoose = require("mongoose");

const cartSchema= new mongoose.Schema({
    title:{
        type: String,
        require: (true, "Please provide title of object")
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

const object = new mongoose.model("cart",cartSchema);

module.exports = object;