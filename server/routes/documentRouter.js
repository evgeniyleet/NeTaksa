const Router = require('express')
const router = new Router()
const documentController = require('../controllers/documentController')

router.post('/upload', documentController.upload)
router.get('/', documentController.getAll)
router.get('/:id', documentController.getOne)

module.exports = router