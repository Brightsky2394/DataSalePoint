// import mongoose module
const mongoose = require('mongoose');

// import dotenv module
const dotEnv = require('dotenv');

// configure the environment variable
dotEnv.config();

// dbUrl to connect to MongoDB database
const dbUrl = process.env.DB_URL;

// asynchronous function for actioning the database correctly
async function dbConnect() {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Successfully connected to MongoDB Atlas`);
    })
    .catch((err) => {
        console.log(`Unable to connect to MongoDB`, err);
    })
}

module.exports = dbConnect;