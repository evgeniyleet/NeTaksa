const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const tripRouter = require('./tripRouter')
const documentRouter = require('./documentRouter')

router.use('/user', userRouter)
router.use('/trip', tripRouter)
router.use('/document', documentRouter)

module.exports = router