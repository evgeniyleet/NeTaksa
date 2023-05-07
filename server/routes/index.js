const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const tripRouter = require('./tripRouter')

router.use('/user', userRouter)
router.use('/trip', tripRouter)

module.exports = router