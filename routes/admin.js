const {Router} = require("express");

const adminRouter = Router();

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

userRouter.post("/course", function(req,res){
    res.json({
        message:"Upload course end point"
    })
})

userRouter.put("/course", function(req,res){
    res.json({
        message:"Update course end point"
    })
})

userRouter.post("/course/all", function(req,res){
    res.json({
        message:"Get all course end point"
    })
})

module.exports = {
    adminRouter : adminRouter
}