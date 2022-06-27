//* after (npm init -y) and (npm install express). Install npm install -g nodemon

const express = require('express'); // Require express.
const res = require('express/lib/response');
const app = express(); // set express application to variable.

const PORT = 3000; // Sets port to a variable.

let users = [
    {name: 'Griselda', location: 'New York'},
    {name: 'Kyle', location: 'California'},
    {name: 'Ford', location: 'Texas'}
];

app.get('/users', (req, res) => {
    res.send(users)
}) 

let favMovies = [
    {movie: 'Princess Bride'},
    {movie: 'Spiderman Into the Spiderverse'},
    {movie: 'Love Actually'}
];

app.get('/fav_movies', (req, res) => {
    res.send(favMovies)
})

let addresses = [
    {address: '451 Normal Street Oak Park New York'},
    {address: '12867 Fontucky Court Fontana California'},
    {address: '1241 Money Ave Austin Texas'}
];

app.get('/addresses', (req, res) => {
    res.send(addresses)
})
// Get request for newly created server, another callback function. Sends response.

app.listen(PORT, () => {
    console.log('Server has been started successfully!')
}) 
// Starts application. Two arguments (memory space, callback function). Actually start server by running in terminal node {file name}.