
// server.js
const express = require('express')
const morgan = require('morgan')

const itemsRouter = require('./react-app/src/components/ItemsRouter')

const app = express()
const PORT = 9000

// middleware
app.use(express.json())
app.use(morgan('dev'))

// route
app.use('/items', itemsRouter)

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// server startup logic
app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
})