const express = require('express');
const app = express();
const port = 3000;

let food = [
    {type: 'pizza', topping: 'pepperoni'},
    {type: 'bbq', meat: 'brisket'},
    {type: 'ice cream', flavor: 'chocolate'}
]

let drinks = [
    {drink: 'water'},
    {drink: 'soda'},
    {drink: 'coffee'}
]

let cars = [
    {make: 'Tesla', model: '3'},
    {make: 'Ram', model: 1500},
    {make: 'Toyota', model: 'Sienna'}
]

app.get('/food', function(req, res) {
  res.send(food)
});

app.get('/drinks', function(req, res) {
    res.send(drinks)
});

app.get('/cars', function(req, res) {
res.send(cars)
});


app.listen(port, function() {
  console.log(`App listening on port ${port}!`)
});