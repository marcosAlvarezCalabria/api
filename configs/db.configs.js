const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-post'

mongoose.connect(MONGODB_URI)
    .then(() => console.info(`Successfully connected to the data base ${MONGODB_URI}`))//CUIDADO
    .catch((error) => console.error('An error ocurred trying to connect to the data base'))//CUIDADO