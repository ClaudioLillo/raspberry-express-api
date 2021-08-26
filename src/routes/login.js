import express from 'express'
import {loginUser} from '../controllers/login'
const router = express.Router()

console.log("algo")
console.log(loginUser)
router.route("/")
.post(loginUser)


module.exports = router