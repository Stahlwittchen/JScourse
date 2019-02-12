import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop'
    },
    parentID: String,
    name: String,
    phone: Number,
    count: Number
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;