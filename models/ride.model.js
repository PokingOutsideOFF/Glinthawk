const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Driver = require('./driver.model');
const User = require('./user.model');

const rideSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: Driver,
        required: true
    },
    current_loc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    pick_up_time: {
        type: Date,
        default: Date.now(),
    },
    

},
{ versionKey: false }
)

module.exports = Ride = mongoose.model("ride", rideSchema);