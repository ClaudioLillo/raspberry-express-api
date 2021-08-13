import express from 'express'
const router = express()

import {auth} from '../middlewares' 

import loginRouter from './login'

router.use("/login", loginRouter)

router.get("/user", auth, (req, res)=>{
    res.status(200).json({authorized: true})
})

export default router