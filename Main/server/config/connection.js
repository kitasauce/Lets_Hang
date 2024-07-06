const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://katvkaiser:bMb45QF51pnIYNac@mern-shopping.ojp1lj1.mongodb.net/lets_hang?retryWrites=true&w=majority&appName=mern-shopping');

module.exports = mongoose.connection;
