require('dotenv').config()
import {Sequelize} from 'sequelize'
import mariadb from 'mariadb'


const database=process.env.DATABASE || "elm"
const username=process.env.USER || "root"
const password=process.env.PASSWORD ||"triptofano"
const port=process.env.PORT || '3306'

console.log(`mariadb://${username}:${password}@localhost:${port}/${database}`)

const sequelize = new Sequelize(`mariadb://${username}:${password}@localhost:${port}/${database}`)


module.exports = sequelize


