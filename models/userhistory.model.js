const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userhisSchema = new Schema({
    trip_start_loc: {
        type: String,
        required: true
    },
    trip_destination: {
        type: String,
        required: true
    },
    trip_review: {
        type: String,
        required: true,
    },
    dat_time: {
        type: Date,
        required: true
    },

},
{ versionKey: false }
)

module.exports = User_His = mongoose.model("user_history", userhisSchema);
