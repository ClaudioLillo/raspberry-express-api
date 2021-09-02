import express from 'express'
const router = express.Router()
import {getUsers, createUser} from '../controllers/user'
import { getRoles, createRole } from '../controllers/roles'

import {auth} from '../middlewares' 

import {loginUser} from '../controllers/login'

router.route("/login")
.post(loginUser)
//auth middleware
router.route("/user")
.get(auth, getUsers)
.post(createUser)

router.route("/role")
.get(getRoles)
.post(createRole)

export default router