import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    admin: Boolean,
    avatar: String,
    phone: String,
    email: String,
    _recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    _workshops:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop'
    }],
    _requests: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;