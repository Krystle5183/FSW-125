const express = require('express'); 
const vehicleRoute = express.Router(); 
const { v4: uuidv4 } = require('uuid');

const vehicles = [
    {
        year: 2016,
        make: "Subaru",
        model: "WRX",
        trim: "Limited",
        color: "Black",
        options: ["Sunroof", "Manual Transmission", "AWD System", "Blind Assist Mirrors", "Hill Assist"],
        price: 25000,
        mileage: 45432,
        available: true,
        vin: uuidv4()
    },
    {
        year: 1995,
        make: "Nissan",
        model: "240SX",
        trim: "SE",
        color: "Gray",
        options: ["Power Mirrors and Locks", "Cruise Control", "Limited Slip Differential", "Short Shifter", "Manual Transmission"],
        price: 20000,
        mileage: 127005,
        available: true,
        vin: uuidv4()
    },
    {
        year: 2017,
        make: "Kia",
        model: "Forte5",
        trim: "SX",
        color: "White",
        options: ["Folding Mirrors", "Cruise Control", "Manual Transmission", "Auto Dimming Mirrors", "LED Headlights", "Ventilated and Heated Front Seats"],
        price: 16500,
        mileage: 55454,
        available: true,
        vin: uuidv4()
    },
    {
        year: 2004,
        make: "Lexus",
        model: "IS300",
        trim: "Sport Cross",
        color: "Silver",
        options: ["Staggered fitment", "Paddle Shifters", "Automatic Transmission", "Heated Seats"],
        price: 16500,
        mileage: 175903,
        available: true,
        vin: uuidv4()
    }
];

vehicleRoute
    .get('/all', (req, res) => {
        res.status(200).send(vehicles); // Successful request.
    }) // GET ALL REQUEST

    .get('/:make', (req, res, next) => {
        const vehicleMake = req.params.make;
        const matches = vehicles.filter((vehicle) => vehicle.make === vehicleMake);

        if (matches.length === 0){
            const error = new Error('This vehicle make was not found.');
            res.status(404); // Not found. 
            return next(error);
        };

        res.status(200).send(matches); // Successful request.
    }) // GET ONE REQUEST OFF ON VEHICLE MAKE

    .post('/add', (req, res) => {
        const newVehicle = req.body;
        newVehicle.vin = uuidv4();
        vehicles.push(newVehicle);
        res.status(201).send(req.body); // Successfully created resource.
    }) // ADDS NEW VEHICLE

    .delete('/delete/:vehicleVin', (req, res, next) => {
        const vehicleVin = req.params.vehicleVin;
        const vehicleIndex = vehicles.findIndex((vehicle) => vehicle.vin === vehicleVin);
        vehicles.splice(vehicleIndex, 1);
        res.status(202).send(`Vehicle has been successfully removed.`); // Successfully created/updated resource. 
    }) // DELETES VEHICLE

    .put('/edit/:vehicleVin', (req, res) => {
        const vehicleVin = req.params.vehicleVin;
        const vehicleIndex = vehicles.findIndex((vehicle) => vehicle.vin === vehicleVin);
        const editedVehicle = Object.assign(vehicles[vehicleIndex], req.body);
        res.status(201).send(editedVehicle); // Successfully created resource. 
    }) // EDIT VEHICLES


module.exports = vehicleRoute;