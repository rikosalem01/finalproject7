import express from 'express'
import { deleteUser, getAllUser, getSingleUser, login, register, updateUser } from '../controller/user.js'
import { verifyAuth, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put("/:id", verifyAuth, updateUser)
router.delete("/:id", verifyAuth, deleteUser)
router.get("/:id", verifyAuth, getSingleUser)
router.get("/", verifyAdmin, getAllUser)

export default router