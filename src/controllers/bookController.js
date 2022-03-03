const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let data = req.body
    let auId = data.author
    let pbId = data.publisher
    

    let author1 = await authorModel.findById(auId)
    let publisher1 = await publisherModel.findById(pbId)
    
    
    
    if(data.hasOwnProperty("author")){
        
        if(author1 === null)  {
            return  res.send({error: "author is not present"})
        }else{
           if (data.hasOwnProperty("publisher")){
            if(publisher1 === null){
                return res.send({error : "publisher is not present"})
            }else{
                let bookData = await bookModel.create(data)
                return res.send({book : bookData})
            }
           } else{
               return res.send({error : "publisher id is required" })
           }
           
           
        }
    
    }
    else {
        return  res.send({error: "author id is required"})
    }
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data: books})
}


// const updateHardCover = async function (req, res){

//     let data = req.body

//     let books = await bookModel.find().populate("publisher")

        
//     let booksByPublisher = books.filter(ele => (ele.publisher.name == "Penguin") || (ele.publisher.name == "HarperCollins")) 

//     let booksName = booksByPublisher.map(x => x.name)
//     console.log(booksName)

//     let updatedCover = []

//     for (let i=0; i<booksName.length;  i++){
//         let element = booksName[i]
//         let updateData = await bookModel.findOneAndUpdate({name : element}, {$set : data}, {new : true})
//         updatedCover.push(updateData)
//     }
//     res.send({updatedCover : updatedCover})
// }


const putBook= async function (req,res){
    const update = await bookModel.updateMany({$or: [{"newPublisher5":"6220eea3812885104baa971a" },{"newPublisher5": "6220ee47812885104baa9714"}]},{"isHardCover": true},{new:true})
    res.send("changes Updated")
  }






const increaseSale= async function (req, res) {
    let increasePrice = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});
  
    res.send({msg: "Price Changed successfully Check your Database for updated price"})
}




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.putBook= putBook
//module.exports.updateHardCover = updateHardCover
module.exports.increaseSale = increaseSale