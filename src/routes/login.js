require('dotenv').config()
import express from 'express'
import jwt from 'jsonwebtoken'


const secret = process.env.SECRET

const router = express()

router.post("", (req, res)=>{
    const {username, password} = req.body
    console.log("username: ", username)
    const token = jwt.sign({ username: username}, secret);
    res.status(200).json({username: username, token: token})
})



export default router