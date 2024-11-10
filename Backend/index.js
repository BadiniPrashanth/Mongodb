import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import Authrouter from "./Routes/auth.js"
import userrouter from "./Routes/user.js"
import messagerouter from "./Routes/message.js"
// import EmployeeModel from "./models/Employee.js"

import {app,server} from "./socket/socket.js"
app.use(cors());
app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb+srv://prashanthgoudbadini1234:Prashanth1234@cluster0.lpvsf.mongodb.net/mydata").then(data=>console.log("mongodb connected")
)

app.use("/user",Authrouter)
app.use("/users",userrouter)
app.use("/message",messagerouter)


// app.post("/register",(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(details=>res.json(details))
// })

// app.post("/signin",(req,res)=>{
//     const {email,password}=req.body;
//     EmployeeModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password===password){
//                 res.json("success")
//             }else{
//                 res.json("pass is incrct")
//             }
//         }else{
//             res.json("no record found")
//         }
//     })
// })

server.listen(2000,()=>{
    console.log("connected to 2000")
})