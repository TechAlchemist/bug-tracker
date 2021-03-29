const mongoose = require('mongoose');

const db = mongoose.connection;

try {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}
catch (error) {
    console.error(error);
}
    

db.on('connected', () => {
    console.log('Database connected. ');
});