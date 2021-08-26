import express from 'express'
const router = express.Router()
import {getUsers, createUser} from '../controllers/user'

import {auth} from '../middlewares' 

import {loginUser} from '../controllers/login'

router.route("/login")
.post(loginUser)
//auth middleware
router.route("/user")
.get(getUsers)
.post(createUser)

export default router