const express = require('express')
const app = express()
const connection = require('./db')

const GET_APP_INFO_QUERY = "SELECT appname, author FROM app_infor"

const get_app_data = () => {
    connection.query(GET_APP_INFO_QUERY, (err, result) => {
            if(err){
                console.err("Query error", err)
                return
            }

            return result
    })
}

module.exports = get_app_data