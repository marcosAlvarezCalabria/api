require('dotenv').config();

const express= require('express');
const mongoose= require('mongoose')
const logger = require('morgan');

require('./configs/db.configs');

const app = express();

//Midleware
app.use(logger('dev'));

app.use(express.json());

//Routes
const router = require('./configs/routes.config')
app.use('/api',router);

//errors handlers
app.use ((req, res, next ) => {
    res.status(404).json.apply({message: "Route not found"})
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: "Internal server error"})
})



const port = 3000
app.listen(port,()=>console.info (`running in port ${port}`))