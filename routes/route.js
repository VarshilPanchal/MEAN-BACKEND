const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;
const Employee = require('../models/employee');
const router = express.Router();

const employee = require('../models/employee');

// POST
router.post('/', async (req, res) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        vertical: req.body.vertical,
        salary: req.body.salary,
    });

    employee.save((err, doc) => {
        if (err) {
            console.log('Error in post data :' + err);
        } else {
            res.send(doc);
        }
    })
});

// GET BY ID
router.get('/:id', async (req, res) => {

    let id = req.params.id;
    if (ObjectId.isValid(id)) {
        Employee.findById(id, (err, doc) => {
            if (err) {
                console.log('Error in get by id data :' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send("No Record Found: " + id);
    }
})

// DELETE
router.delete('/:id', async (req, res) => {

    let id = req.params.id;
    if (ObjectId.isValid(id)) {
        Employee.findByIdAndRemove(id, (err, doc) => {
            if (err) {
                console.log('Error in delete :' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send("No Record Found: " + id);
    }
})

// PUT
router.put('/:id', async (req, res) => {

    let id = req.params.id;
    if (ObjectId.isValid(id)) {


        let employee = {
            name: req.body.name,
            designation: req.body.designation,
            vertical: req.body.vertical,
            salary: req.body.salary,
        };

        Employee.findByIdAndUpdate(id, { $set: employee }, { new: true }, (err, doc) => {
            if (err) {
                console.log('data is not present :' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send("No Record Found: " + id);
    }
})

// GET
router.get('/', async (req, res) => {

    Employee.find((err, doc) => {
        if (err) {
            console.log('Error in get data :' + err);
        } else {
            res.send(doc);
        }
    });

})

module.exports = router;