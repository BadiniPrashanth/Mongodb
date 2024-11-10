import express from "express"
import {Register,upload,Signin,verify } from "../controllers/Register.controller.js"
import verifyuser from "../middleware/verifyuser.js"

const router=express.Router()

router.post("/register",upload.single("file"),Register)
router.post("/Signin",Signin)
router.get("/verify",verifyuser,verify)

export default router