const accessRouter= require("express").Router();
const userSchema = require("../model/userSchema");
const auth = require('../middleware/auth')
const bcrypt = require("bcryptjs");

accessRouter.get("/info", auth , async (req, res)=>{
    try{

        res.status(200).json({
            token:req.token,
            user: req.rootUser,
            id: req.userId
        })
    }catch(error){
        res.status(400).json({
            message: error
        })
    }
})

accessRouter.route("/login")
.post(async (req, res)=>{
    try{
    const {email, pass} = req.body;

    if(!email || !pass){
        res.status(400).json({message: "something went wrong!!"});
        return;
    }

    const user = await userSchema.findOne({email});

    if(user){

        const match = await bcrypt.compare(pass, user.pass)

        if(match){
            token = await user.generateToken();
    
            res.cookie("jwtEcommerce", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            res.status(200).json({
                message: "successful",
                user
            })
        }else{
            res.status(400).json({
                message: "something went wrong!!!"
            })
        }
    }else{
        res.status(400).json({
            message: "no user found..."
        })
    }
}catch(error){
    console.log(error)
}
});

accessRouter.route("/signup")
.post(async (req, res)=>{
    const user1 = req.body.user;
    const email = user1.email;

    if(user1.pass === user1.confirmPass){

        const user = await userSchema.findOne({email})

        if(!user){
            const data = await userSchema.create(user1);
    
            res.status(201).json({
                message: "successful",
                data
            });
        }
        else{
            res.status(400).json({
                message: "user Exists"
            })
        }
    }else{
        throw new Error("Please Check details");
    }
});

accessRouter.get('/logout', (req, res) => {
    res.session.destroy();
    res.clearCookie('jwtEcommerce', {path: '/'});
    res.status(200).json({
            message: "Done!"
        });
  });
  


module.exports = accessRouter;
