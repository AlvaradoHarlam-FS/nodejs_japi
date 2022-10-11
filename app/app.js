const express = require('express');
const dataRouter = require("../router/dataRouter");
const app = express();

//http://localhost:3000
app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Service is available' });
});

//router middleware
app.use('/beers', dataRouter);

// add middleware to handle errors and bad  url 
app.use((req, res, next) => {
   const error = new Error('Service unavailable');
   error.status = 404;
   next(error);
});

app.use((error, req, res, next) => {
res.status(error.status || 500).json({ 
    error: {
    message: error.message,
    status: error.status,
    method: req.method,   
},
});
});

module.exports = app;
