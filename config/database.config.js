const mongoose = require('mongoose');

const mongoDB = process.env.MONGO_URL;

module.exports = {
    connect: () => {
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connection');
    },
    error: () => {
        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
};