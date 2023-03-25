import { Router } from 'express'
import authMiddlewares from './app/middlewares/auth'

import multer from 'multer'
import multerConfig from './config/multer'

import CategoryController from './app/controller/CategoryController'
import ProductControler from './app/controller/ProductControler'
import SessionController from './app/controller/SessionController'
import UserController from './app/controller/UserController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductControler.store)
routes.get('/products', ProductControler.index)

routes.post('/categories', CategoryController.store)
routes.get('/categories', CategoryController.index)

export default routes
