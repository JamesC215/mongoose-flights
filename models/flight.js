const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: { type: String },
    arrival: { type: Date },
    desination: { type: Date},
}, {
    timestamps: true,
});

const flightSchema = new Schema({
    airline: {
        type: [String],
    },
    airport: {
        type: String,
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },   
    departs: {
        type: Date,
        default: Date.now()
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flights', flightSchema);