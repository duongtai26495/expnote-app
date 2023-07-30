const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs');
const connection = require('../../app/db')
const User = require('../../app/model/User')
const { v4: uuidv4 } = require('uuid');
router.get("/",(req, res)=>{
    res.redirect("./")
})

const ADD_USER_QUERY = "INSERT INTO users(id, username, fullname, password, email, gender) values (?, ?, ?, ?, ?, ?)"

router.route("/username=:username")
.get((req, res)=>{
    res.send(`User Get: ${req.params.username}`)
})
.put((req, res)=>{
    res.send(`User Put: ${req.params.username}`)
})
.delete((req, res)=>{
    res.send(`User Delete: ${req.params.username}`)
})
.post((req, res)=>{
    res.send(`User Post: ${req.params.username}`)
})

router.post("/add_new", async (req, res)=>{
    const {username, fullname, password, email, gender } = req.body
    const id = uuidv4()
    const encodedPassword = await bcrypt.hash(password, 10)
    const new_user = new User(id, username, fullname, password, email, gender);
    console.log(new_user)
    connection.query(ADD_USER_QUERY, [id, username, fullname, encodedPassword, email, gender], (err, result)=>{
        if (err) {
            console.error('Error saving user to database:', err);
            return res.status(500).json({ message: 'Error saving user to database' });
          }
          console.log('User registered successfully:', result);
          res.status(201).json({ message: 'User registered successfully' })
    })
})
 
module.exports = router