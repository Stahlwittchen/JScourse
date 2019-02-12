import mongoose from 'mongoose';

const workshopSchema = mongoose.Schema({
    title: String,
    desc: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    cost: Number,
    date: Date,
    available: Number,
    _booked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    }]
});

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;