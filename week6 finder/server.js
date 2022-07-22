const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 3002;
const itemsRouter = require('./itemsRouter');

app.use(express.json());
app.use(morgan('dev'));

app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log('Server started on port: 3002!')
}); 