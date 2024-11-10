import mongoose from "mongoose"

const EmployeeSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    file:{type:String}
})

const EmployeeModel=mongoose.model("details",EmployeeSchema)
export default EmployeeModel;