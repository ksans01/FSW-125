

const express = require('express')
const morgan = require('morgan')

const itemsRouter = require('./react-app/src/components/ItemsRouter')

const app = express()
const PORT = 9000

// middleware
app.use(express.json())
app.use(morgan('dev'))

// router
app.use('/items', itemsRouter)

app.listen(PORT, () => {
    console.log(`App started on port" ${PORT}`)
})