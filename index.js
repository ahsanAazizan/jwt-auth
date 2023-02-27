require('dotenv').config()
require('express-async-errors')
const express = require('express')

const app = express()

const router = require('./routes/router')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

app.use(express.json())
// app.use(express.static('./public'))
app.use('/api', router)
app.use(notFound)
app.use(errorHandler)

const setup = async () => {
    try {
        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    } catch (error) {
        console.log(error)
    }
}

setup()
