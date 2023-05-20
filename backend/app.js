
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import tourRoute from "./router/tour.js";
import reviewRoute from "./router/review.js";
import bookingRoute from "./router/booking.js";
import userRoute from "./router/user.js"

dotenv.config();
const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: true,
  credentials: true,
};

db.sync()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/tour", tourRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
