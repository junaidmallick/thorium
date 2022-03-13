const axios = require('axios')

let getMemes = async function(req, res){

try{
    let options = {
        method : "GET",
        url : "https://api.imgflip.com/get_memes"
    }
    let result = await axios(options)
    res.status(200).send({status: true, msg: result.data})
}catch(error){
    res.status(500).send({error: error.message})
}
}

let createMemes = async function(req, res){

    try{
        let meme_id = req.query.template_id
        let upperText = req.query.text0
        let lowerText = req.query.text1
        let userName = req.query.username
        let pass = req.query.password

        if(meme_id && upperText && lowerText && userName && pass){
            let options = {
                method : "POST",
                url : `https://api.imgflip.com/caption_image?template_id=${meme_id}&text0=${upperText}&text1=${lowerText}&username=${userName}&password=${pass}`
            }
            let result = await axios(options)
            res.status(200).send({status: true, msg: result.data})
        }else{
            res.status(400).send({status:false, msg:"Please provide valid input data"})
        }
    }catch(error){
        res.status(500).send({error: error.message})
    }
    }

module.exports.getMemes = getMemes
module.exports.createMemes = createMemes