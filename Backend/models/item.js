const mongoose=require("mongoose")

const itemSchema=new mongoose.Schema({
    name:String,
    style:String
})

const itemModel=mongoose.model("items",itemSchema)
module.exports=itemModel