import express from "express"
import users from "../controllers/user.controller.js"
import verifyuser from "../middleware/verifyuser.js"

const router=express.Router();

router.get("/",verifyuser,users)

export default router;