import Tour from "../model/tour.js"
import { Op } from 'sequelize';


export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);
    const pageSize = 8

    try {
        const totalCount = await Tour.count();
        const totalPages = Math.ceil(totalCount / pageSize);

        const tours = await Tour.findAll({
            include: 'reviews',
            offset: page * pageSize,
            limit: pageSize
        });

        res.status(200).json({
            success: true,
            count: tours.length,
            totalPages: totalPages,
            currentPage: page,
            message: "Successful",
            data: tours
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findByPk(id, {include: 'reviews'})

        if (!tour) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tour
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const createTour = async (req, res) => {

    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        if (!savedTour) {
            return res.status(400).json({
                message: "Tour not created"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully created!",
            data: savedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.update(req.body, {
            where: { id: id }
        })

        const updateTour = await Tour.findByPk(id)

        if (updatedTour == 1) {
            return res.status(400).json({
                success: true,
                message: "Tour success to update!",
                data: updateTour
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Tour not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.destroy({ where: { id: id } })
        res.status(200).json({
            success: true,
            message: "Successfully deleted!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getTourBySearch = async (req, res) => {
    const city = req.query.city;
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
  
    try {
      const tours = await Tour.findAll({
        where: {
          [Op.and]: [
            { city: { [Op.like]: `%${city}%` } },
            { distance: { [Op.gte]: distance } },
            { maxGroupSize: { [Op.gte]: maxGroupSize } },
          ],
        },
        include: "reviews",
      });
  
      if (tours.length > 0) {
        res.status(200).json({
          success: true,
          count: tours.length,
          message: "Successful",
          data: tours,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Not Found!",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.findAll({
            where: {
                featured: true
            },
            limit: 8,
            include: 'reviews'
        });

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        })
    }
}

export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.count()

        res.status(200).json({
            success: true,
            data: tourCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tour count."
        })
    }
}
