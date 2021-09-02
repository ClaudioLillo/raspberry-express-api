import User from '../models/User'


require('dotenv').config()
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



const secret = process.env.SECRET
const salt = 10

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
        bcrypt.compare(password, user.password)
        .then(result=>{
            console.log("bcrypt result: ", result)
            if(result){
                const token = jwt.sign({ username: username}, secret);
                res.status(200).json({username, token})
            }
            else{
                res.status(400).json({msg: "invalid credentials"})
            }
            
        })
        .catch(err=>{
            res.status(400).json({msg: "invalid credentials"})
        })

        
    }
}


