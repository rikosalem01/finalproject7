import Booking from "../model/booking.js";

export const createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: newBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findByPk(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "succesfull",
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.findAll();

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "sucessfull",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
