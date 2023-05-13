import Tour from "../model/tour.js";
import Review from "../model/review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = await Review.create({ ...req.body });

  try {
    const tour = await Tour.findOne({ where: { id: tourId } });
    await tour.addReview(newReview);

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
