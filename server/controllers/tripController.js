const {Trip} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class TripController {
    async create(req, res, next) {
        try {
            const {driver_id, startTrip, endTrip} = req.body
            //const {img} = req.files
            //let fileName = uuid.v4() + ".jpg"
            //img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const trip = await Trip.create({driver_id, startTrip, endTrip})
            return res.json(trip)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res, next) {
        const trips = await Trip.findAll()
        return res.json(trips)
    }

    async getOne(req, res) {
        const {id} = req.params
        const trip = await Trip.findOne(
            {
                where: {id},
            },
        )
        return res.json(trip)
    }
    async getOneSpecifally(req, res) {
        //const {id} = req.params
        const {startTrip} = req.params
        const trip = await Trip.findOne(
            {
                where: {startTrip},
            },
        )
        return res.json(trip)
    }
        
}

module.exports = new TripController()