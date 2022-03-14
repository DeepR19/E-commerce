const jwt  = require("jsonwebtoken");
const userSchema = require("../model/userSchema");

const auth = async (req, res, next) => {
       
    try{ 
        const token = req.cookies.jwtEcommerce;
        
        const verifyToken = jwt.verify(token, "mynameisdeepakfromcomputerbranch");

        const id = verifyToken;
        const rootUser = await userSchema.findOne({_id: id._id, "tokens.token": token});

        if(!rootUser){ 
            console.log("user not found");
            throw new Error("User not Found")
        };

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    }
    catch(e){
        res.status(401).send("Unauthorized: No token provided");
    }
}


module.exports = auth;