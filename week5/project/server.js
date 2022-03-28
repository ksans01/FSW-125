

const express = require('express')
const morgan = require('morgan')

const itemsRouter = require('./react-app/src/components/ItemsRouter.js')

const app = express()
const PORT = 9000

app.use(express.json())
app.use(morgan('dev'))

app.use('/items', itemsRouter)

app.listen(PORT, () => {
    console.log(`App started on port" ${PORT}`)
})