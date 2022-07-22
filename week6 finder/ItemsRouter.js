const express = require('express');
const itemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {
        name: 'Avocado',
        type: 'food',
        price: 20,
        _id: uuidv4()
    },
    {
        name: 'Shirt',
        type: 'clothing',
        price: 40,
        _id: uuidv4()
    },
    {
        name: 'Lego Set',
        type: 'toy',
        price: 30,
        _id: uuidv4()
    },
    {
        name: 'Hat',
        type: 'clothing',
        price: 15,
        _id: uuidv4()
    },
    {
        name: 'Pasta',
        type: 'food',
        price: 8,
        _id: uuidv4()
    },
    {
        name: 'Baseball',
        type: 'toy',
        price: 5,
        _id: uuidv4()
    },
    {
        name: 'lemons',
        type: 'food',
        price: 2,
        _id: uuidv4()
    },
    {
        name: 'Robot',
        type: 'toy',
        price: 45,
        _id: uuidv4()
    },
    {
        name: 'Pants',
        type: 'clothing',
        price: 55,
        _id: uuidv4()
    },
    {
        name: 'Banana',
        type: 'fruit',
        price: 2,
        _id: uuidv4()
    },
    {
        name: 'Orange',
        type: 'fruit',
        price: 2,
        _id: uuidv4()
    },
    {
        name: 'Carrot',
        type: 'vegetable',
        price: 1,
        _id: uuidv4()
    },
    {
        name: 'Nissan',
        type: 'car',
        price: 25000,
        _id: uuidv4()
    }
];

itemsRouter
    .get('/', (req, res) => {
        res.status(200);
        res.send(items);
    })

    .get('/:itemType', (req, res) => {
        const itemType = req.params.itemType;
        const matches = items.filter((item) => item.type === itemType);
        console.log(matches)
        res.status(200);
        res.send(matches);
    })

    .get('/search/type', (req, res) => {
        const queryType = req.query.type;
        console.log(queryType)
        const someMatches = items.filter((item) => item.type === queryType);
        res.status(200);
        res.send(someMatches);
    })

module.exports = itemsRouter;