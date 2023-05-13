import Tour from "../model/tour.js"


export const getAllTour = async (req, res) => {
    try {
        const tours = await Tour.findAll({
            include: 'reviews'
        })

        if (!tours) {
            return res.status(404).json({
                message: "No Tour Found"
            })
        }

        res.status(200).json({
            success: true,
            count: tours.length,
            message: "This is List Tour",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findByPk(id)

        if(!tour){
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
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

