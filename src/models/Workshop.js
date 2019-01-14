import mongoose from 'mongoose';

const workshopSchema = mongoose.Schema({
    title: String,
    desc: String,
    author: String,
    image: String,
    cost: Number,
    date: Date,
    booked: Array
});

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;