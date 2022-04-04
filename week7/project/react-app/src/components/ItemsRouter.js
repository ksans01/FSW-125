
const {v4: uuidv4} = require('uuid')
const express = require('express');
const itemsRouter = express.Router();
itemsRouter.use(express.json())
const port = 3000;

// fake data
let items = [
    {name: "Aliens", description: "Big head, big eyes, tiny body", isReal: true, id: uuidv4()},
    {name: "Big Foot", description: "Tall and hairy", isReal: false, id: uuidv4()},
    {name: "Lochness", description: "Long neck and large body", isReal: false, id: uuidv4()},
    {name: "Sasquatch", description: "Looks like Big Foot, but different", isReal: true, id: uuidv4()},
];

itemsRouter
// http://localhost:9000/items

    .get('/', (req, res, next) => {
        res.status(200).send(items);
    }) // GET all

// http://localhost:9000/items/{items.id}

    .get('/:itemsId', (req, res, next) => {
        const itemsId = req.params.itemsId;
        const singularItem = items.find(items => items._id === itemsId);
        console.log(singularItem)
        if (!singularItem) {
            const error = new Error('This item was not found');
            return next(error);
        }

        res.status(201).send(singularItem)
    }) // GET one

    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        items.push(newItem);

        res.status(200).send(newItem)
    }) // POST one

    .delete('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        const itemsIndex = items.findIndex(items => items._id === itemsId)
        items.splice(itemsIndex, 1);

        res.status(201).send('Resource successfully deleted')

    }) // DELETE one

    .put('/:itemsId', (req, res) => {
        const itemsId = req.params.itemsId;
        // const itemsIndex = items.findIndex(items => items._id === itemsId)
        // Object.assign(items[itemsIndex], req.body);
        let count = 0
        items.forEach(function(value) {
            if (value.id === itemsId) {
                items[count].name = req.body.name
                items[count].description = req.body.description
            }
            count++
        })

        res.status(200).send(`Resource successfully updated`)

    }) // PUT one

module.exports = itemsRouter