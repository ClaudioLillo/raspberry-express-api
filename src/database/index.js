require('dotenv').config()
import {Sequelize} from 'sequelize'
import mariadb from 'mariadb'


const database=process.env.DATABASE
const username=process.env.USER
const password=process.env.PASSWORD

const sequelize = new Sequelize(`mariadb://${username}:${password}@localhost:3308/${database}`)


module.exports = sequelize


