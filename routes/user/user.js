const express = require("express")
const router = express.Router()
const connection = require('../../app/db')


router.get("/",(req, res)=>{
    res.redirect("./")
})

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

router.post("/add_new", (req, res)=>{
    const new_user = request.body
    console.log(new_user)
    res.status(201)
})

module.exports = router