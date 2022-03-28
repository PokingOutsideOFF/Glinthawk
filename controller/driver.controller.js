const Driver = require('../models/driver.model');

async function addDriver(req, res) {
    try {
        const body = req.body;
        const driver = Driver(body);
        const savedDriver = await driver.save();
        res.status(200).json({
            message: "Driver added successfully",
            savedDriver
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function getDriver(req, res) {
    try {
        const drivers = await Driver.find({});
        res.status(200).json({
            drivers
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function reviewDriver(req, res) {
    try {
        const review = req.body;
        const DriverId = req.params.productId;
        const reviewDriver = Driver.findByIdAndUpdate(DriverId, {$push: {reviews: review}}, {new: true});
        res.status(200).json({
            message: "Review added successfully",
            reviewDriver
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {addDriver, getDriver, reviewDriver};