const mongoose = require('mongoose');
const config = require('config');
const db = config.get("MongoURI");


const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log("mongoDb connected..");
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDb;