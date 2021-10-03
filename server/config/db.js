const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/expense-tracker',{
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected Succesfully`.cyan.bold);
    } catch(err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;