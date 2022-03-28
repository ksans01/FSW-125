
const {v4: uuidv4} = require('uuid')
const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

// fake data
let items = [
    {name: "Dog Food", description: "dry", price: 20, id: uuidv4()},
    {name: "Cat Food", description: "wet", price: 10, id: uuidv4()},
    {name: 'Guitar', description: 'Instrument', price: 500, id: uuidv4()},
    {name: 'PlayStation', description: 'Video Game', price: 500, id: uuidv4()},
    {name: 'Hammer', description: 'tool', price: 15, id: uuidv4()},
    {name: 'Dodge Ram', description: 'truck', price: 50000, id: uuidv4()}
];

app
    .get('/items', (req, res) => {
        res.send(items)
    }) // GET all

    .get('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        const singularItem = items.find(items => items.id === itemsId);

        res.send(singularItems)
    }) // GET one

    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        items.push(newItem);

        res.send(newItem)
    }) // POST one

    .delete('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        const itemsIndex = items.findIndex(items => items._id === itemsId)
        items.splice(itemsIndex, 1);

        res.send('Resource successfully deleted')

    }) // DELETE one

    .put('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        const itemsIndex = items.findIndex(items => items.id === itemsId)
        Object.assign(items[itemsIndex], req.body);

        res.send(`Resource successfully updated`)

    }) // PUT one

    .listen(port, function() {
    console.log(`App listening on port ${port}!`)
    });

