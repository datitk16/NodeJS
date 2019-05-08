import { Router } from 'express'
import user from './user'
import auth from './auth'
import product from './product'

const router = new Router()

router.use('/users', user)
router.use('/products', product)
router.use('/auth', auth)

export default router