const {v4: uuidv4} = require('uuid')
const express = require('express');
const app = express();
const port = 3000;

var recycledItems = [
    {id: uuidv4(), name: "Dog Food", desc: "dry", recyclable: true, quantity: 1, price: 20},
    {id: uuidv4(), name: "Cat Food", desc: "wet", recyclable: true, quantity: 2, price: 10}
]

// CRUD: R - Read
app.get('/itemsIntake', function(req, res){
    console.log("Retrieve shopping list")
    res.status(200).json(recycledItems)
})

// CRUD: C - Create
app.post('/itemsIntake', function(req, res){
    console.log('Adding to recycledItems list')
    recycledItems.push(req.body)
    console.log("recycledItems now has" + recycledItems.length)
    res.status(201).end()
})

// CRUD: D - Delete
app.delete('/itemsIntake/:id', function(req, res){
    console.log('Delete from recycledItems list')
    let count = 0
    for (const item of recycledItems){
        if(item.id == req.params.id){
            shopping.splice(count, 1)
            break
        }
        count++
    }
    recycledItems.push(req.body)
    console.log("recycledItems now has" + recycledItems.length)
    res.status(201).end()
})



app.listen(port, function() {
    console.log(`App listening on port ${port}!`)
  });
  
// nodemon automatically refreshes
// nodemon [node app]
// ex: nodemon app.js