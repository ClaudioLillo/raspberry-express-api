//import model
import Role from '../models/Role'


export const getRoles = async(req, res)=>{
    console.log("req body: ", req.body)
    await Role.findAll()
    .then(data=>{
        console.log(data)
        res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({msg: "not found"})
    })
}

export const createRole = async(req, res)=>{
    const role = req.body
    await Role.create({
        name: role.name,
        permissions: role.permissions
    })
    .then(data=>{
        res.status(204).json({user: data})
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({msg: "not able to create role"})
    })    
    
}   
