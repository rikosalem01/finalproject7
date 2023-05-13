import express from "express";
import { createReview } from "../controller/review.js";
import { verifyAuth } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/:tourId", verifyAuth, createReview);

export default router;
