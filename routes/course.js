const {Router} = require("express");

const courseRouter = Router();

    courseRouter.post("/course/purchases",function(req,res){
        res.json({
            message:"Course purchased endpoint"
        })
    })
    
    courseRouter.get("/courses/preview", function(req,res){
        res.json({
            message:"Courses end point"
        })
    })


module.exports = {
courseRouter : courseRouter
}