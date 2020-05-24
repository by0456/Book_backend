const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0-hmpcl.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI);
};

module.exports = connectDB;