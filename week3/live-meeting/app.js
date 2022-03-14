const express = require('express');
const app = express();
const port = 3000;

var shopping = [
    {id: 1, item: "tic tacs", price: 0.99},
    {id: 2, item: "Dr. Pepper", price: 1.79}
]

// CRUD: R - Read
app.get('/list', function(req, res){
    console.log("Retrieve shopping list")
    res.status(200).json(shopping)
})

// CRUD: C - Create
app.post('/list', function(req, res){
    console.log('Adding to shopping list')
    shopping.push(req.body)
    console.log("Shopping now has" + shopping.length)
    res.status(201).end()
})

// CRUD: D - Delete
app.delete('/list/:id', function(req, res){
    console.log('Delete from shopping list')
    let count = 0
    for (const item of shopping){
        if(item.id == req.params.id){
            shopping.splice(count, 1)
            break
        }
        count++
    }
    shopping.push(req.body)
    console.log("Shopping now has" + shopping.length)
    res.status(201).end()
})



app.listen(port, function() {
    console.log(`App listening on port ${port}!`)
  });
  
// nodemon automatically refreshes
// nodemon [node app]
// ex: nodemon app.js