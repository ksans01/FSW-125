const express = require('express')
const app = express()

const PORT = 3000

let users = [
    {name: 'Kurt', location: 'Texas'},
    {name: 'Brittany', location: 'Texas'},
    {name: 'Ava', location: 'Outside'},
    {name: 'Rhea', location: 'Backyard'},
    {name: 'Flora', location: 'Back Patio'},
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})