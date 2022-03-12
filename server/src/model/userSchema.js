const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
// const dotenv = require("dotenv");


// dotenv.config({path: "./.env"})
const JWT = process.env.JWT;

const userSchema= new mongoose.Schema({
    Fname:{
        type: String,
        require: (true, "Please provide Fname")
    },
    Lname:{
        type: String,
        require: (true, "Please provide Lname")
    },
    email:{
        type: String,
        require: (true, "Please provide email"),
        unique: true
    },
    mob:{
        type: String,
        require: (true, "Please provide mob")
    },
    pass:{
        type: String,
        require: (true, "Please provide password")
    },
    tokens:[
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
  
});

userSchema.pre("save",async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass, 12)
    }
    next()
})

userSchema.methods.generateToken = async function(){
    try {
        const token = jwt.sign({_id : this._id.toString()}, "mynameisdeepakfromcomputerbranch");
        
        console.log("token",token)
        this.tokens = this.tokens.concat({token});
        
        await this.save();
        return token;
    } catch (error) {
        console.log(error);   
    }
}


const user = new mongoose.model("user",userSchema);

module.exports = user;