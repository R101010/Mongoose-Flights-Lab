const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW','DEN', 'LAX','SAN']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        require: true
    },

    flightNum: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW','DEN', 'LAX','SAN'],
        default: 'DEN'
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);