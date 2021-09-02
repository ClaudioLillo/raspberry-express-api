require('dotenv').config()
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET

export const auth = (req, res, next) =>{
    const headers = req.headers
    const token = headers.authorization
    console.log(token)
    const decoded = jwt.verify(token, secret);
    console.log(decoded)
    req.body.animal="gato"
    next()
}