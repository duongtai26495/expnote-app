const mysql = require(`mysql2`)
const express = require(`express`)

const dotenv = require('dotenv');
// Đọc các biến môi trường từ file .env
dotenv.config();
const app = express()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((error)=>{
    if(error){
        console.error("Error connection: ", error)
        return
    }else{
        console.log("Connected")
    }
})


app.use((req, res, next)=>{
    req.db = connection
    next()
})


module.exports = connection