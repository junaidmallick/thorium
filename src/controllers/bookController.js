const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook = async (request, response)=>{
    const data = request.body; 
    const dataRes = await BookModel.create(data); 
    response.send({
        msg: dataRes
    }); 
}

const bookList = async (request, response)=>{
    const dataRes = await BookModel.find().select({
        'bookName': 1,
        'authorName': 1,
        '_id': 0
    }); 
    response.send({
        msg: dataRes
    }); 
}

const getBooksInYear = async (request, response)=>{
    const year = request.body.year; 
    const dataRes = await BookModel.find({
        'year': year
    }).select({
        'bookName': 1,
        '_id': 0
    }); 
    response.send({
        msg: dataRes
    });
}

const getParticularBooks = async function(req,res){
    let condn = req.body;
    if("bookName" in condn){
        let particularBooks = await BookModel.find({ bookName: {$regex : condn.bookName}})
        return res.send(particularBooks)
    }
    else if ("authorName" in condn){
        let particularBooks = await BookModel.find({ authorName: {$regex : condn.authorName}})
        return res.send(particularBooks)
    }
    else if ("tags" in condn){
        if(condn.tags in BookModel.tags){
            let particularBooks = await BookModel.find({tags : condn.tags})
            return res.send(particularBooks)
        }
    }
    else if ("prices" in condn){
        if ("indianPrice" in condn.prices){
            let particularBooks = await BookModel.find({"prices.indianPrice" : condn.prices.indianPrice})
            return res.send(particularBooks)
        }
        else if ("europePrice" in condn.prices){
            let particularBooks = await BookModel.find({"prices.europePrice" : condn.prices.europePrice})
            return res.send(particularBooks)
        }
    }
    else {
        let particularBooks = await BookModel.find(condn)
        return res.send(particularBooks)
    }
}



    const getXINRBooks = async function(req,res){
    let xinrBooks =  await BookModel.find({"prices.indianPrice" : {$in : ["Rs. 500","Rs. 200","Rs. 100"]}})
    res.send(xinrBooks)
}



    const getRandomBooks = async function(req,res){
        let randomBooks = await BookModel.find({ $or:[{stockAvailable:true},{totalPages: {$gt:500}}]})
        res.send(randomBooks)
    }



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
