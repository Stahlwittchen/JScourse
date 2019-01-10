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
// Workshop.create(  {
//     title: "Cookies class",
//     author: "Daphne",
//     desc: "some information",
//     cost: 15,
//     date: "01.11.2018",
//     image: "/svg/baking.svg",
//     booked: [
//         {
//             "name": "Mary",
//             "phone": "123-12-12",
//             "payment": true
//         },
//         {
//             "name": "Jane",
//             "phone": "567-23-12",
//             "payment": false
//         }
//     ]
// }, function(err, doc){
//     mongoose.disconnect();
//
//     if(err) return console.log(err);
//
//     console.log("Сохранен объект Recipe", doc);
// });
module.exports = Workshop;