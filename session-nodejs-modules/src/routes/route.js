const express = require('express');
const router = express.Router();


let logger = require('../logger/logger')
let helper = require('../util/helper')
let formatter = require('../validator/formatter')




logger.welcome()

helper.printDate()
helper.printMonth()
helper.getbatchinfo()

formatter.greeting;
formatter.sentence;
formatter.sentence2;

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.get('/hello', function(req,res){
//     let month= ["January","February","March","April","May","June","July",
// "August","September","October","November","December"];

//     res.send(_.chunk(["January","February","March","April","May","June","July",
// "August","September","October","November","December"],4))

// });

app.get("/hello",(req,res)=>{
    res.send("welcome")
});

module.exports = router;