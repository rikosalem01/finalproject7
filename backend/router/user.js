import express from 'express';
import { deleteUser, getAllUser, getSingleUser, login, register, updateUser } from '../controller/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';



const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getSingleUser)
router.get("/", verifyAdmin, getAllUser)

export default router