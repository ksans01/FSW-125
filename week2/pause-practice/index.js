var express = require('express')
var app = express()

// default port for web is 80 or 8080
const port = 3000

app.get('/user', function(req, res){
    res.send("GET-Hello World")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})