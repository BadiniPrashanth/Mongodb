import multer from "multer"
import EmployeeModel from "../models/Employee.js"
// import path from "path"
import bcrypt from "bcrypt"
import path from "path"
import jwt from "jsonwebtoken"

const JWT_KEY="secretkeyofjwtforchatapp";

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null, "public/files" )
    },
        filename:(req,file,cb)=>{
            cb(
                null,file.fieldname + "_" + Date.now() + path.extname(file.originalname)
            )
        }
})

export const upload=multer({
    storage:storage
})

async function Register(req,res){
  try {
    const {username,email,password}=req.body;
  const file=req.file.filename;

const userExist=await EmployeeModel.findOne({email})
if(userExist){
    return res.status(400).json({msg:"user already exist"})
}

const hashpass=await bcrypt.hash(password,10)

const newUser=new EmployeeModel({
    username,
    email,
    password:hashpass,
    file:file
})
await newUser.save()
return res.status(200).json({msg:"success"})

  } catch (error) {
    console.log(error)
    return res.status(500).json({msg:"error"+error})
  }
}

async function Signin(req,res) {
  try {
    const {username,email,password}=req.body;
  

const userExist=await EmployeeModel.findOne({email})
if(!userExist){
    return res.status(400).json({msg:"user not exist"})
}

const matchpass=await bcrypt.compare(password,userExist.password)
if(!matchpass){
  return res.status(400).json({msg:"incorrect password"})
}

const token=jwt.sign({id:userExist._id},JWT_KEY,{
  expiresIn:"1h"
})

return res.status(200).json({msg:"success",token,user:{_id:userExist._id,username:userExist.username}})
  } catch (error) {
    console.log(error)
    return res.status(500).json({msg:"error"+error})
  }
}

const verify=(req,res)=>{
return res.status(200).json({msg:"success"})
}


export {Register,Signin,verify}