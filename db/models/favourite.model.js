const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})
const Favourite = mongoose.model('Favourite', FavouriteSchema);

module.exports = {Favourite}