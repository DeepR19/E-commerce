const mongoose = require("mongoose");

const objectSchema= new mongoose.Schema({
    title:{
        type: String,
        require: (true, "Please provide title of object")
    },
    brand:{
        type: String,
        require: (true, "Please provide brand of object")
    },
    price:{
        type: Number,
        require: (true, "Please provide price of object")
    },
    color:{
        type: String,
        require: (true, "Please provide color of object")
    },
    desc:[
        {
            type: String,
            require: (true, "Please provide desc of object")
        }
    ],
    rating:{
        type: Number,
        require: (true, "Please provide rating of object")
    }
});

const object = new mongoose.model("objects",objectSchema);

module.exports = object;