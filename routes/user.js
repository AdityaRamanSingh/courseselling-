
 const {Router}= require("express");

 const userRouter  = Router();

 userRouter.post("/signup", function(req,res){
        res.json({
            message:"Sign Up end point"
        })
    })
    
    userRouter.post("/signin", function(req,res){
        res.json({
            message:"Sign In end point"
        })
    })
    
    userRouter.get("/purchases", function(req,res){
        res.json({
            message:"Course purchase end point"
        })
    })
module.exports = {
    userRouter: userRouter
}