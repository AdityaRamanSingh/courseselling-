const express = require("express");
const app = express();
const port=3000;

app.get("/use/signup", function(req,res){
    res.json({
        message:"Sign Up end point"
    })
})

app.get("/use/signin", function(req,res){
    res.json({
        message:"Sign In end point"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message:"Course purchase end point"
    })
})

app.post("/course/purchases",function(req,res){
    res.json({
        message:"Course purchased endpoint"
    })
})

app.get("/courses", function(req,res){
    res.json({
        message:"Courses end point"
    })
})

app.listen(port,()=>{
    console.log('App is running on port:');
})