const express = require('express')
const cors = require("cors")
require("./db/conn");
const Student = require("./models/students")
const studentRouter = require("./routers/student")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(studentRouter);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

