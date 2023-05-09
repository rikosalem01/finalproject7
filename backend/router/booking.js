import express from "express";
import { createBooking, getBooking, getAllBooking } from "../controller/booking.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);

export default router;
