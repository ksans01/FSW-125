
const {v4: uuidv4} = require('uuid')
const express = require('express');
const itemsRouter = express.Router();
itemsRouter.use(express.json())
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

// routes
itemsRouter
// http://localhost:9000/items

    .get('/', (req, res, next) => {
        res.status(200).send(items)
    }) // GET all

// http://localhost:9000/items/{items.id}

    .get('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        const singularItem = items.find(items => items.id === itemsId);

        if (!singularItem) {
            const error = new Error('This item was not found')
            return next(error)
        }

        res.status(200).send(singularItem)
    }) // GET one

    .get('/')

    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        items.push(newItem);

        res.status(201).send(newItem)
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

module.exports = itemsRouter