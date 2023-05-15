const {Document} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class DocumentController {
    async upload(req, res, next) {
        try {
            const {passport, driverLicense, vehiclePassport, insurance} = req.files
           
            let fileNamePassport = uuid.v4() + ".jpg"
            passport.mv(path.resolve(__dirname, '..', 'static', fileNamePassport))  
            let fileNameDriverLicense = uuid.v4() + ".jpg"
            driverLicense.mv(path.resolve(__dirname, '..', 'static', fileNameDriverLicense))  
            let fileNameVehiclePassport = uuid.v4() + ".jpg"
            vehiclePassport.mv(path.resolve(__dirname, '..', 'static', fileNameVehiclePassport)) 
            let fileNameInsurance = uuid.v4() + ".jpg"
            insurance.mv(path.resolve(__dirname, '..', 'static', fileNameInsurance)) 
            
            const document = await Document.create({passport: fileNamePassport, driverLicense: fileNameDriverLicense, vehiclePassport: fileNameVehiclePassport, insurance: fileNameInsurance})
            
            return res.json(document)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getAll(req, res, next) {
        const document = await Document.findAll()
        return res.json(document)
    }
    async getOne(req, res) {
        const {id} = req.params
        const document = await Document.findOne(
            {
                where: {id},
            },
        )
        return res.json(document)
    }
        
}

module.exports = new DocumentController()