import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    admin: Boolean,
    avatar: String,
    phone: String,
    email: String,
    myRecipes: Array,
    myClasses: Array,
    myRequestsForClasses: Array,
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
});

const User = mongoose.model('User', userSchema);
// User.create(  {
//     username: "Daphne",
//     admin: false,
//     avatar: "/svg/baker.svg",
//     phone: "789-00-86",
//     email: "any@gmail.com",
//     myRecipes: [],
//     myClasses: [],
//     myRequestsForClasses: []
// }, function(err, doc){
//     mongoose.disconnect();
//
//     if(err) return console.log(err);
//
//     console.log("Сохранен объект User", doc);
// });
module.exports = User;