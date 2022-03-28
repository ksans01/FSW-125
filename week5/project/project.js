const {v4: uuidv4} = require('uuid')
const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

let data = [
    {name: 'Guitar', description: 'Instrument', price: 500, id: uuidv4()},
    {name: 'PlayStation', description: 'Video Game', price: 500, id: uuidv4()},
    {name: 'Hammer', description: 'tool', price: 15, id: uuidv4()},
    {name: 'Dodge Ram', description: 'truck', price: 50000, id: uuidv4()},
];

app
    .get('/', (req, res) => {
        res.send(data)
    }) // GET all

    .get('/:dataId', (req, res) => {
        const dataId = req.params.dataId;
        const singularData = data.find(data => data.id === dataId);

        res.send(singularData)
    }) // GET one

    .post('/', (req, res) => {
        const newData = req.body;
        newData._id = uuidv4();
        data.push(newData);

        console.log(data)
        res.send(`Successfully added ${newData.title} to the data`)
    }) // POST one

    .delete('/:dataId', (req, res) => {
        const dataId = req.params.dataId;
        const dataIndex = data.findIndex(data => data.id === dataId)
        data.splice(dataIndex, 1);

        res.send('Resource successfully deleted')

    }) // DELETE one

    .put('/:dataId', (req, res) => {
        const dataId = req.params.dataId;
        const dataIndex = data.findIndex(data => data.id === dataId)
        const updatedDataResource = Object.assign(data[dataIndex], req.body);

        res.send(`Resource successfully updated to ${updatedDataResource}`)

    }) // PUT one

    .listen(port, function() {
    console.log(`App listening on port ${port}!`)
    });

