const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// Recyclyed items array.
const recycledItems = [
    {
        name: "CardBoard",
        desc: "Constructed from paper.",
        recyclable: true,
        quantity: 985,
        ppu: .05,
        _id: uuidv4()
    },
    {
        name: "Mixed Paper",
        desc: "Various pieces of paper.",
        recyclable: true,
        quantity: 1234,
        ppu: .01,
        _id: uuidv4()
    },
    {
        name: "Metal",
        desc: "Scrap metal.",
        recyclable: true,
        quantity: 75,
        ppu: .35,
        _id: uuidv4()
    },
    {
        name: "Glass",
        desc: "Various glass containers.",
        recyclable: true,
        quantity: 1123,
        ppu: .06,
        _id: uuidv4()
    },
    {
        name: "Plastic",
        desc: "Various plastic containers.",
        recyclable: true,
        quantity: 2314,
        ppu: .08,
        _id: uuidv4()
    },
    {
        name: "Cartons",
        desc: "Fluid cartons.",
        recyclable: true,
        quantity: 751,
        ppu: .03,
        _id: uuidv4()
    }
];

recycledItemsRouter 
    .get('/', (req, res) => {
        res.send(recycledItems)
    })

    .post ('/add', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItems.push(newRecycledItem);
        console.log(recycledItems);
        res.send(`Successfully added ${newRecycledItem.name} to the database.`);
    })

module.exports = recycledItemsRouter;