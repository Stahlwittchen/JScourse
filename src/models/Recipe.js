import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    desc: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    ingredients: String,
    steps: String,
    lastModifiedDate: Date
});

recipeSchema.pre('save', function(next) {
    this.lastModifiedDate = new Date;
    next();
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;