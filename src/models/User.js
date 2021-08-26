import {DataTypes, Sequelize, Model} from 'sequelize'

const sequelize = require('../database') 

const Users = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})

module.exports = Users