const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    name: { type: String },
    designation: { type: String },
    vertical: { type: String },
    salary: { type: String },
});

module.exports = Employee;