const express = require("express");

// const  = require("./routes/course")
const {userRouter} = require("./routes/user")

app.use("/user", userRouter);
app.use("/course", courseRouter);

const app = express();

const port=3000;


app.listen(port,()=>{
    console.log('App is running on port:');
})