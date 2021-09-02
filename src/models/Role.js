import {DataTypes, Sequelize, Model} from 'sequelize'

const sequelize = require('../database') 

const Roles = sequelize.define('roles',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    permissions: DataTypes.STRING //ARRAY type is only available for postgreSQL
})

module.exports = Roles