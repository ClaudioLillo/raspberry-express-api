import User from '../models/User'

require('dotenv').config()
import jwt from 'jsonwebtoken'


const secret = process.env.SECRET


export const loginUser = async(req, res)=>{
    const {username, password} = req.body
    console.log("username: ", username)
    console.log("password: ", password)
    const user = await User.findOne({ where: { username: username } });
    console.log(user)
    if (user === null) {
        console.log('Not found!');
        res.status(400).json({msg: "Not found"})
    } else {
        res.status(200).json({user})
    }
    // const token = jwt.sign({ username: username}, secret);
    // res.status(200).json({username: username, token: token})
    
    
}


