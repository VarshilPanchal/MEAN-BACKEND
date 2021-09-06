const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDemoDB', (err) => {
    if (!err) {
        console.log("Connection established!!!!!!!!!!");
    } else {
        console.log("Error: " + err);
    }
})

module.exports = mongoose;