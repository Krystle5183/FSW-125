//* Server
const express = require('express');
const app = express();

//* Packages
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

//* Port
const PORT = 3200;
const vehicleRoute = require('./routes/vehicleRoute');

//* Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));


//* Router
app.use('/vehicles', vehicleRoute); 

//* Error Handling
app.use((error, req, res, next) => {  
    return res.send({errMsg: error.message})  
})


//* Server startup
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});