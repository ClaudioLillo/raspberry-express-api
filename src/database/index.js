require('dotenv').config()
import {Sequelize} from 'sequelize'
import mariadb from 'mariadb'


const database=process.env.DATABASE
const username=process.env.USER
const password=process.env.PASSWORD
const port=process.env.PORT || '3306'

const sequelize = new Sequelize(`mariadb://${username}:${password}@localhost:${port}/${database}`)


module.exports = sequelize


