const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Hello users")
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

module.exports = router