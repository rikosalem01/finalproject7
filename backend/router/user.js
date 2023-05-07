import express from 'express';
import { deleteUser, getAllUser, getSingleUser, login, register, updateUser } from '../controller/user.js';



const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getSingleUser)
router.get("/", getAllUser)

export default router