const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/yhistu';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDBga edukalt ühendatud');
    } catch (err) {
        console.error('MongoDBga ühendamine ebaõnnestus', err);
        process.exit(1);
    }
};

module.exports = connectDB;
