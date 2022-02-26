const bookSchema = require('../models/bookschema')


const newBookData = async function(req, res){

    let bookData = req.body
    let postedBook = await bookSchema.create(bookData)

    res.send({newBook : postedBook })


}

const getBookData = async function(req,res){

    let fetchedBook = await bookSchema.find()
    res.send({booksCollection: fetchedBook})
}



module.exports.newBookData = newBookData
module.exports.getBookData = getBookData