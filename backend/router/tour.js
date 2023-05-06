import express from "express"
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from "../controller/tour.js"

const router = express.Router()

router.get('/', getAllTour)
router.get('/:id', getSingleTour)
router.post('/', createTour)
router.put('/:id', updateTour)
router.delete('/:id', deleteTour)


export default router