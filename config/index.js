const mongoose = require('mongoose');
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = {
    connect
}