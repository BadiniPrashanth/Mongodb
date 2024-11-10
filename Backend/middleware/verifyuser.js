import jwt from "jsonwebtoken"
import EmployeeModel from "../models/Employee.js";

const JWT_KEY="secretkeyofjwtforchatapp";

const verifyuser=async (req,res,next)=>{
try {
    const token=req.headers.authorization.split(" ")[1]
    if(!token){
        return res.status(401).json({msg:"unauthorized"})
    }

    const decorder=jwt.verify(token,JWT_KEY)
     if(!decorder){
        return res.status(401).json({msg:"invalid token"})
     }
     const user=await EmployeeModel.findOne({_id:decorder.id}).select("-password");
     req.user=user
     next()

} catch (error) {
    
}
}

export default verifyuser;