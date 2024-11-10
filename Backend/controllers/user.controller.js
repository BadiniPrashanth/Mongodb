import EmployeeModel from "../models/Employee.js";


const users=async(req,res)=>{
try {
    const loginUser=req.user._id;
    const allUsers=await EmployeeModel.find({_id:{$ne:loginUser}}).select("-password")
    return res.status(200).json({msg:"success",users:allUsers})
} catch (error) {
    console.log("error",error.message)
    return res.status(500).json({msg:error})
}
}
export default users;