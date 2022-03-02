const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {type: ObjectId, ref: "newAuthor5"},
    price: Number,
    ratings: Number,
    publisher: {type: ObjectId, ref: "newPublisher5"}



}, { timestamps: true });


module.exports = mongoose.model('newBook5', bookSchema)
