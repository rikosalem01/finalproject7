import express from "express"
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from "../controller/tour.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

router.get('/', getAllTour)
router.get('/:id', getSingleTour)
router.post('/', verifyAdmin, createTour)
router.put('/:id', verifyAdmin, updateTour)
router.delete('/:id', verifyAdmin, deleteTour)


export default router