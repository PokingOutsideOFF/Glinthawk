const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./user.model');

const driverSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    car_no:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    ratings: [{
        rating: Number,
        user: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        text: String,
        _id: false
    }]
},
    { versionKey: false }
);

module.exports = mongoose.model('driver', driverSchema);