const Ride = require('../models/ride.model');

async function createRide(req, res) {
    try {
        const ride = new Ride(req.body);
        const RideAccepted = await ride.save();
        res.status(200).json({
            message: "Ride accepted successfully",
            RideAccepted
        });
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

async function deleteRide(req, res) {
    try {
        await Ride.deleteMany({});
        res.status(200).json({message: "Ride deleted successfully"});
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

async function getRide(req, res) {
    try {
        const result = await Ride.find({});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

module.exports = {createRide, deleteRide, getRide};