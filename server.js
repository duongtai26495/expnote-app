const express = require('express')
const app = express()
const userRouter = require('./routes/user/user')
const postRouter = require('./routes/posts/posts')
const connection = require('./app/db')
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    const GET_APP_INFO_QUERY = "SELECT appname, author FROM app_info"

    connection.query(GET_APP_INFO_QUERY, (err, result) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).send('Đã xảy ra lỗi khi lấy dữ liệu từ cơ sở dữ liệu.');
            return;
        }

        res.json(result)
    })
})


app.use('/user', userRouter)
app.use('/posts', postRouter)

app.listen(port, ()=>{
    console.log(`An access to ${port}`)
}) 