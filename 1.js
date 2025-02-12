const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/newdata';

mongoose.connect(url, {  // Add connection options (see below)
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));


const db = mongoose.connection;

// Optional: other connection events
db.on('error', (err) => console.error('MongoDB error:', err));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));

module.exports = db;