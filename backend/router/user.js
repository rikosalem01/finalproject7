import express from 'express';
import { deleteUser, getAllUser, getSingleUser, login, logout, register, updateUser } from '../controller/user.js';
import {  verifyAdmin, verifyAuth } from '../utils/verifyToken.js';



const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.put("/:id", verifyAuth, updateUser)
router.delete("/:id",verifyAuth, deleteUser)
router.get("/:id", verifyAuth, getSingleUser)
router.get("/", verifyAdmin, getAllUser)

export default router