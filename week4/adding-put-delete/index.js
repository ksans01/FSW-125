// Route Parameters
// Route Path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: {"userId":"34","bookId":"8989"}

// To define route parameters, specify in route path
// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

const {v4: uuidv4} = require('uuid')
const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

// fake data
let books = [
    {titel: 'this is the 1st title', author: 'this is the 1st author', genre: 'here is the 1st genre', id: uuidv4()},
    {titel: 'this is the 2nd title', author: 'this is the 2nd author', genre: 'here is the 2nd genre', id: uuidv4()},
    {titel: 'this is the 3rd title', author: 'this is the 3rd author', genre: 'here is the 3rd genre', id: uuidv4()},
    {titel: 'this is the 4th title', author: 'this is the 4th author', genre: 'here is the 4th genre', id: uuidv4()},
];

// a route parameter is never null or undefined
// a route parameter is always a string with positive length

// routes
// bookRouter
app
    .get('/', (req, res) => {
        res.send(books)
    }) // GET all

    .get('/:bookId', (req, res) => {
        const bookId = req.params.bookId;
        const singularBook = books.find(book => book.id === bookId);

        res.send(singularBook)
    }) // GET one

    .post('/', (req, res) => {
        const newBook = req.body;
        newBook._id = uuidv4();
        books.push(newBook);

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the data`)
    }) // POST one

    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId;
        const bookIndex = books.findIndex(book => book._id === bookId)
        books.splice(bookIndex, 1);

        res.send('Resource successfully deleted')

    }) // DELETE one

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId;
        const bookIndex = books.findIndex(book => book.id === bookId)
        const updatedBookResource = Object.assign(books[bookIndex], req.body);

        res.send(`Resource successfully updated to ${updatedBookResource}`)

    }) // PUT one

    .listen(port, function() {
    console.log(`App listening on port ${port}!`)
    });

