//import model
import User from '../models/User'
import bcrypt from 'bcrypt'

export const getUsers = async(req, res)=>{
    console.log("req body: ", req.body)
    await User.findAll()
    .then(data=>{
        console.log(data)
        res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({msg: "not found"})
    })
}

export const createUser = async(req, res)=>{
    const user = req.body
    const salt = 10
    bcrypt.hash(user.password, salt, async(err, hash)=>{
        if(err){
            console.log("Error in hashing process")
        }
        else{
            console.log("hash: ", hash)
            await User.create({
                username: user.username,
                email: user.email,
                password: hash
            })
            .then(data=>{
                res.status(204).json({user: data})
            })
            .catch(err=>{
                console.log(err)
                res.status(400).json({msg: "not able to create user"})
            })
        }
    })
    
}   
