//import model
import User from '../models/User'

export const getUsers = async(req, res)=>{
    console.log(req)
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
    await User.create({
        username: user.username,
        email: user.email,
        password: user.password
    })
    .then(data=>{
        res.status(204).json({user: data})
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({msg: "not able to create user"})
    })
}
