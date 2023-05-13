import express from "express";
import { createBooking, getBooking, getAllBooking } from "../controller/booking.js";
import {verifyAuth, verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

router.post("/", verifyAuth, createBooking);
router.get("/:id", verifyAuth, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
