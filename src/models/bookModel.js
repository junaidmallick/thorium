const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {type: ObjectId, ref: "newAuthor5"},
    price: Number,
    rating: Number,
    publisher: {type: ObjectId, ref: "newPublisher5"},

    isHardCover:{type:Boolean,default:false}



}, { timestamps: true });


module.exports = mongoose.model('newBook5', bookSchema)
