const express = require('express');
const dataRouter = express.Router();
const { dataUsa, dataUsaById } = require("../services/dataService");

dataRouter.get('/', (req, res, next) => {
    console.log('Beer');
    dataUsa()
    .then((result) => {
    res.status(200).json(result.data);
    })
    .catch((err) => {
    res.status(500).json({ 
        error:{
            message: error.message,
        },
        });
    });
});
dataRouter.get('/:id', (req, res, next) => { 
    console.log('Beer id');
    dataUsaById(req.params.id)
    .then((result) => {
        console.log(result);
    res.status(200).json(result.data);
})

.catch((err) => {
    console.log(err);
    res.status(500).json({
        error:{
            message: error.message,
        },
    });
});
});
module.exports = dataRouter;