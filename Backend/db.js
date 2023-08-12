const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/';

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log("Connected to database"))
    .catch(error =>{
        console.error("error occured", error);
    })
}

module.exports = connectToMongo;